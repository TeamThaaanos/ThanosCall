from dotenv import load_dotenv
import os
import torch
from openai import OpenAI
from firebase_config import bucket, db
from transformers import BartForConditionalGeneration, PreTrainedTokenizerFast

# ✅ Firebase Storage & Cloud Functions 환경 경로 설정
MODEL_BUCKET = bucket
MODEL_PATH = "KOBARTmodel_finetuned"
LOCAL_MODEL_DIR = "/tmp/KOBARTmodel_finetuned"

# ✅ OpenAI API 키 설정
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
if not openai_api_key:
    raise ValueError("OpenAI API 키가 설정되지 않았습니다.")
client = OpenAI(api_key=openai_api_key)

# 🔹 1️⃣ Firebase Storage에서 KoBART 모델 다운로드
def download_kobart_model():
    """Firebase Storage에서 Fine-Tuned KoBART 모델을 다운로드하여 로컬에 저장"""
    try:
        if not os.path.exists(LOCAL_MODEL_DIR):
            os.makedirs(LOCAL_MODEL_DIR)

        model_files = [
            "config.json",
            "generation_config.json",
            "model.safetensors",
            "special_tokens_map.json",
            "tokenizer_config.json",
            "tokenizer.json",
        ]

        for file in model_files:
            blob = bucket.blob(f"{MODEL_PATH}/{file}")
            local_path = os.path.join(LOCAL_MODEL_DIR, file)

            if not blob.exists():
                raise FileNotFoundError(f"Firebase Storage에서 {file}을 찾을 수 없습니다.")

            blob.download_to_filename(local_path)
            print(f"✅ 다운로드 완료: {file}")

        return LOCAL_MODEL_DIR
    except Exception as e:
        print(f"❌ KoBART 모델 다운로드 실패: {str(e)}")
        return None

# 🔹 2️⃣ KoBART 모델을 로드하는 함수
def load_kobart_model():
    """Fine-Tuned KoBART 모델을 로드"""
    model_dir = download_kobart_model()
    
    if model_dir:
        try:
            tokenizer = PreTrainedTokenizerFast.from_pretrained(model_dir)
            model = BartForConditionalGeneration.from_pretrained(model_dir)
            return model, tokenizer
        except Exception as e:
            print(f"❌ KoBART 모델 로드 실패: {str(e)}")

    return None, None  # KoBART 모델이 없을 경우

# ✅ **한 번만 모델을 로드하도록 전역 변수 설정**
MODEL, TOKENIZER = load_kobart_model()

# 🔹 3️⃣ Firebase Storage에서 변환된 텍스트 파일 가져오기
def get_transcript_from_storage(consult_id):
    """Firebase Storage에서 변환된 텍스트 파일 가져오기"""
    try:
        text_storage_path = f"transcripts/{consult_id}.txt"
        blob = bucket.blob(text_storage_path)

        if not blob.exists():
            raise FileNotFoundError(f"변환된 텍스트 파일이 존재하지 않습니다: {text_storage_path}")

        return blob.download_as_text()
    except Exception as e:
        raise Exception(f"텍스트 가져오기 실패: {str(e)}")

# 🔹 4️⃣ KoBART 요약 (모델이 있으면 KoBART, 없으면 OpenAI GPT-3.5)
def summarize_text(transcript_text):
    """KoBART 모델을 이용하여 텍스트 요약, 모델이 없으면 OpenAI API 사용"""
    try:
        if MODEL and TOKENIZER:
            # ✅ KoBART 모델 사용
            input_text = transcript_text.strip().replace("\n", " ")
            inputs = TOKENIZER(input_text, return_tensors="pt", max_length=512, truncation=True)

            summary_ids = MODEL.generate(
                **inputs,
                max_length=256,
                min_length=80,
                num_beams=5,
                length_penalty=1.2,
                early_stopping=True
            )

            return TOKENIZER.decode(summary_ids[0], skip_special_tokens=True)
        else:
            # ✅ OpenAI GPT-3.5 사용
            print("⚠️ KoBART 모델이 없습니다. OpenAI API를 사용합니다.")
            return summarize_with_openai(transcript_text)
    except Exception as e:
        raise Exception(f"요약 실패: {str(e)}")

# 🔹 5️⃣ OpenAI GPT-3.5를 이용한 요약
def summarize_with_openai(transcript_text):
    """OpenAI GPT-3.5-turbo를 이용하여 텍스트 요약"""
    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "당신은 한국어 요약을 도와주는 AI입니다."},
                {"role": "user", "content": f"다음 내용을 3줄로 요약해 주세요:\n{transcript_text}"}
            ]
        )
        summary = response.choices[0].message.content  # ✅ 올바른 방식으로 content 가져오기
        return summary
    except Exception as e:
        raise Exception(f"OpenAI 요약 실패: {str(e)}")

# 🔹 6️⃣ 요약된 텍스트를 Firebase Storage에 저장
def save_summary_to_storage(consult_id, summary_text):
    """요약된 텍스트를 Firebase Storage에 저장하고 URL 반환"""
    try:
        summary_storage_path = f"summaries/{consult_id}.txt"
        summary_blob = bucket.blob(summary_storage_path)
        summary_blob.upload_from_string(summary_text, content_type="text/plain")

        summary_file_url = f"https://firebasestorage.googleapis.com/v0/b/{MODEL_BUCKET}/o/{summary_storage_path.replace('/', '%2F')}?alt=media"
        return summary_file_url
    except Exception as e:
        raise Exception(f"요약 저장 실패: {str(e)}")

# 🔹 7️⃣ Firestore에 요약된 텍스트 정보 저장
def save_summary_to_firestore(consult_id, summary_file_url):
    """Firestore에 요약된 텍스트 파일 URL 저장"""
    try:
        doc_ref = db.collection("transcripts").document(consult_id)
        doc_ref.update({"summary_text_file_url": summary_file_url})
        return True
    except Exception as e:
        raise Exception(f"Firestore 요약 저장 실패: {str(e)}")

# 🔹 8️⃣ 전체 요약 실행 함수
def process_summary(consult_id):
    """Firestore에서 변환된 텍스트를 가져와 Fine-Tuned KoBART 모델로 요약 후 저장"""
    try:
        transcript_text = get_transcript_from_storage(consult_id)

        # ✅ KoBART 또는 OpenAI를 이용한 요약
        summary_text = summarize_text(transcript_text)

        # ✅ Firebase Storage에 저장
        summary_file_url = save_summary_to_storage(consult_id, summary_text)

        # ✅ Firestore에 저장
        save_summary_to_firestore(consult_id, summary_file_url)

        return {
            "message": "요약 저장 성공",
            "summary_text": summary_text,
            "summary_file_url": summary_file_url
        }
    except Exception as e:
        raise Exception(f"요약 처리 실패: {str(e)}")
