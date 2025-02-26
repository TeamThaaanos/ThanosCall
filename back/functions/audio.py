from dotenv import load_dotenv
import os
import json
from openai import OpenAI
from werkzeug.utils import secure_filename
from firebase_config import bucket, db  # Firestore 추가

# ✅ 환경 변수 로드
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")

# ✅ 허용되는 음성 파일 확장자
ALLOWED_EXTENSIONS = {"mp3", "mp4", "mpeg", "mpga", "m4a", "wav", "webm"}

if not openai_api_key:
    raise ValueError("OpenAI API 키가 설정되지 않았습니다.")

# ✅ OpenAI API 클라이언트 생성
openAI_client = OpenAI(api_key=openai_api_key)

# 🔹 음성 파일 업로드 (Firebase Storage)
def upload_audio_file(file, consult_id):
    """Firebase Storage에 음성 파일 업로드하고 URL 반환"""
    try:
        filename = secure_filename(file.filename)
        file_ext = filename.rsplit(".", 1)[-1].lower()  # 확장자 추출
        
        if file_ext not in ALLOWED_EXTENSIONS:
            raise ValueError(f"지원되지 않는 오디오 파일 형식입니다: {file_ext}")

        storage_path = f"audio/{consult_id}.{file_ext}"

        blob = bucket.blob(storage_path)
        blob.upload_from_file(file)

        file_url = f"http://127.0.0.1:9199/{bucket.name}/{storage_path}"  # ✅ Firebase Emulator 환경 고려

        return file_url
    except Exception as e:
        raise Exception(f"파일 업로드 실패: {str(e)}")

# 🔹 Whisper API를 이용한 음성 파일 → 텍스트 변환
def transcribe_audio(file_url, consult_id):
    """Firebase Storage에서 직접 음성 파일을 다운로드하여 Whisper API로 변환"""
    try:
        temp_audio_path = f"temp_audio_{consult_id}.wav"  # ✅ 파일 확장자 유지

        # 🔹 Storage에서 직접 다운로드 (Firebase SDK 사용)
        storage_path = file_url.split(f"http://127.0.0.1:9199/{bucket.name}/")[-1]  # 🔹 실제 Storage 내부 경로 추출
        blob = bucket.blob(storage_path)

        if not blob.exists():
            raise FileNotFoundError(f"파일이 Firebase Storage에 존재하지 않습니다: {file_url}")

        blob.download_to_filename(temp_audio_path)  # 🔹 Storage에서 직접 파일 다운로드

        # ✅ 파일이 정상적으로 다운로드되었는지 확인
        if not os.path.exists(temp_audio_path):
            raise FileNotFoundError(f"파일이 존재하지 않습니다: {temp_audio_path}")

        # 🔹 Whisper API 호출
        with open(temp_audio_path, "rb") as audio_file:
            transcription = openAI_client.audio.transcriptions.create(
                model="whisper-1",
                file=audio_file
            )

        transcript_text = transcription.text

        # 🔹 임시 파일 삭제
        os.remove(temp_audio_path)

        return transcript_text
    except Exception as e:
        raise Exception(f"음성 변환 실패: {str(e)}")

# 🔹 변환된 텍스트를 Firebase Storage에 저장
def save_text_to_storage(consult_id, transcript_text):
    """변환된 텍스트를 Firebase Storage에 .txt 파일로 저장하고 URL 반환"""
    try:
        text_storage_path = f"transcripts/{consult_id}.txt"
        text_blob = bucket.blob(text_storage_path)
        text_blob.upload_from_string(transcript_text, content_type="text/plain")
        text_file_url = f"http://127.0.0.1:9199/{bucket.name}/{text_storage_path}"  # ✅ Firebase Emulator 환경 고려
        return text_file_url
    except Exception as e:
        raise Exception(f"텍스트 저장 실패: {str(e)}")

# 🔹 Firestore에 파일과 변환된 텍스트 정보 저장
def save_to_firestore(consult_id, file_url, transcript_text, text_file_url):
    """음성 파일과 변환된 텍스트 정보를 Firestore에 저장"""
    try:
        doc_ref = db.collection("transcripts").document(consult_id)
        doc_ref.set({
            "consult_id": consult_id,
            "file_url": file_url,
            "transcript_text": transcript_text,
            "text_file_url": text_file_url
        })
        return doc_ref.id
    except Exception as e:
        raise Exception(f"Firestore 저장 실패: {str(e)}")

# 🔹 프론트에서 받은 파일을 업로드하고 변환 후 Firestore에 저장하는 함수
def process_audio_file(file, consult_id):
    """프론트에서 업로드된 음성 파일을 Firebase Storage에 저장하고 텍스트 변환 후 Firestore에 저장"""
    try:
        # 1️⃣ 음성 파일 Firebase Storage에 업로드
        file_url = upload_audio_file(file, consult_id)

        # 2️⃣ Whisper API로 텍스트 변환
        transcript_text = transcribe_audio(file_url, consult_id)

        # 3️⃣ 변환된 텍스트를 Firebase Storage에 저장
        text_file_url = save_text_to_storage(consult_id, transcript_text)

        # 4️⃣ Firestore에 데이터 저장
        save_to_firestore(consult_id, file_url, transcript_text, text_file_url)

        return {
            "message": "파일 변환 및 저장 성공",
            "file_url": file_url,
            "transcript_text": transcript_text,
            "text_file_url": text_file_url
        }
    except Exception as e:
        raise Exception(f"오디오 처리 실패: {str(e)}")
