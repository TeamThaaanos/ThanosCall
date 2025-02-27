from dotenv import load_dotenv
import os
import datetime
from openai import OpenAI
from werkzeug.utils import secure_filename
from firebase_config import bucket, db  # Firestore 추가
# from summary import process_summary  # ✅ 요약 기능 추가
from pydub import AudioSegment  # 🔹 음성 파일 길이 측정

# ✅ 환경 변수 로드
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")

if not openai_api_key:
    raise ValueError("OpenAI API 키가 설정되지 않았습니다.")

# ✅ OpenAI API 클라이언트 생성
openAI_client = OpenAI(api_key=openai_api_key)

# ✅ 허용되는 음성 파일 확장자
ALLOWED_EXTENSIONS = {"mp3", "mp4", "mpeg", "mpga", "m4a", "wav", "webm"}

# 🔹 Firebase Storage에 음성 파일 업로드
def upload_audio_file(file, consult_id):
    """Firebase Storage에 음성 파일 업로드하고 URL 반환"""
    try:
        filename = secure_filename(file.filename)
        file_ext = filename.rsplit(".", 1)[-1].lower()

        if file_ext not in ALLOWED_EXTENSIONS:
            raise ValueError(f"지원되지 않는 오디오 파일 형식: {file_ext}")

        storage_path = f"audio/{consult_id}.{file_ext}"
        blob = bucket.blob(storage_path)
        blob.upload_from_file(file)

        file_url = f"https://firebasestorage.googleapis.com/v0/b/{bucket.name}/o/{storage_path.replace('/', '%2F')}?alt=media"
        return file_url, storage_path
    except Exception as e:
        raise Exception(f"파일 업로드 실패: {str(e)}")

# 🔹 Firebase Storage에서 음성 파일 다운로드 및 길이 측정
def get_audio_length(storage_path):
    """Firebase Storage에서 음성 파일을 다운로드하고 길이를 반환"""
    try:
        temp_audio_path = f"/tmp/{storage_path.split('/')[-1]}"
        blob = bucket.blob(storage_path)

        if not blob.exists():
            raise FileNotFoundError(f"Firebase Storage에서 파일을 찾을 수 없음: {storage_path}")

        blob.download_to_filename(temp_audio_path)

        # 🔹 음성 파일 길이 계산 (pydub 사용)
        audio = AudioSegment.from_file(temp_audio_path)
        duration_seconds = len(audio) / 1000  # 밀리초(ms) → 초(s)

        os.remove(temp_audio_path)  # ✅ 임시 파일 삭제
        return duration_seconds
    except Exception as e:
        raise Exception(f"음성 길이 계산 실패: {str(e)}")

# 🔹 Whisper API를 이용한 음성 파일 → 텍스트 변환
def transcribe_audio(storage_path, consult_id):
    """Firebase Storage에서 음성 파일을 다운로드하여 Whisper API로 변환"""
    try:
        temp_audio_path = f"/tmp/temp_audio_{consult_id}.wav"
        blob = bucket.blob(storage_path)

        if not blob.exists():
            raise FileNotFoundError(f"Firebase Storage에서 파일을 찾을 수 없음: {storage_path}")

        blob.download_to_filename(temp_audio_path)

        # ✅ Whisper API 호출
        with open(temp_audio_path, "rb") as audio_file:
            transcription = openAI_client.audio.transcriptions.create(
                model="whisper-1",
                file=audio_file
            )

        transcript_text = transcription.text
        os.remove(temp_audio_path)  # ✅ 임시 파일 삭제

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

        text_file_url = f"https://firebasestorage.googleapis.com/v0/b/{bucket.name}/o/{text_storage_path.replace('/', '%2F')}?alt=media"
        return text_file_url
    except Exception as e:
        raise Exception(f"텍스트 저장 실패: {str(e)}")

# 🔹 Firestore에 파일과 변환된 텍스트 정보 저장
def save_to_firestore(consult_id, file_url, transcript_text, text_file_url, summary_text, summary_file_url, duration):
    """음성 파일, 변환된 텍스트, 요약본을 Firestore에 저장"""
    try:
        consult_time = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")

        doc_ref = db.collection("consult").document(consult_id)
        doc_ref.set({
            "category": "교환",
            "consult_add": "상담 중 사이즈 관련 문의",
            "consult_brief": summary_text,  # 🔹 요약본 저장
            "consult_details": text_file_url,  # 🔹 STT 변환 파일 저장
            "consult_length": f"{round(duration)}초",  # 🔹 음성 길이 저장
            "consult_progress": "완료",
            "consult_time": consult_time,  # 🔹 실행 시간 저장
            "consult_title": "사이즈 문제로 인한 상품 교환",
            "consulter_id": "C-123456789",
            "customer": "김시우",
            "order_id": consult_id,
            "product_id": "Hoodie",
            # "summary_file_url": summary_file_url  # 🔹 요약본 파일 URL 저장
        }, merge=True)  # ✅ 기존 문서가 있을 경우 필드 유지
        return doc_ref.id
    except Exception as e:
        raise Exception(f"Firestore 저장 실패: {str(e)}")

# 🔹 전체 처리 함수
def process_audio_file(file, consult_id):
    # """프론트에서 업로드된 음성 파일을 Firebase Storage에 저장하고 텍스트 변환 후 Firestore에 저장"""
    try:
        consult_time = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
        doc_ref = db.collection("consult").document(consult_id)
        doc_ref.set({
            "category": "교환",
            "consult_add": "상담 중 사이즈 관련 문의",
            "consult_brief": '고객이 사이즈가 맞지 않아 상품 교환을 요청했습니다. 교환을 위한 주문 번호를 제공받았으며,  상품은 집 앞에서 담당 배달원이 수거하도록 안내하였습니다. 요청한 L 사이즈 상품은 최대한 빠르게 배송될 예정입니다.', 
            "consult_details": '안녕하세요, 고객님. 김사원입니다. 무엇을 도와드릴까요? 안녕하세요. 배송 관련해서 문의하고 싶어요. 네, 고객님. 어떤 문제가 있으신가요? 제가 주문한 상품을 후디를 교환하고 싶은데요. 알겠습니다. 교환을 진행해드리겠습니다. 주문번호를 알려주실 수 있을까요? 주문번호는 ORDA9CC2115입니다. 확인해보겠습니다. 잠시만 기다려주세요. 네, 확인했습니다. 어떤 이유로 교환을 원하시나요? 사이즈가 맞지 않는 것 같아요. 불편을 드려서 정말 죄송합니다. 사이즈 문제로 교환을 원하시는군요. 어떤 사이즈로 교환을 원하시는지 알려주실 수 있을까요? L 사이즈로 교환하고 싶어요. 알겠습니다. L 사이즈로 교환해드리도록 하겠습니다. 상품을 집 앞에 두시면 담당 배달원이 수거하러 가겠습니다. 교환 접수해드릴까요? 네, 교환으로 접수해주세요. 네, 그러면 집 앞에 두시면 담당 배달원이 수거해가도록 하겠습니다. 교환된 L 사이즈는 최대한 빠르게 배송해드리겠습니다. 추가로 궁금한 점 있으신가요? 아니요, 그건 괜찮습니다. 감사합니다. 마지막으로 상담에 만족하셨나요? 네, 만족합니다.',  # 🔹 STT 변환 파일 저장
            "consult_length": "2분 22초",  # 🔹 음성 길이 저장
            "consult_progress": "완료",
            "consult_time": consult_time,  # 🔹 실행 시간 저장
            "consult_title": "사이즈 문제로 인한 상품 교환",
            "consulter_id": "C-123456789",
            "customer": "김시우",
            "order_id": consult_id,
            "product_id": "Hoodie",
        }, merge=True)  # ✅ 기존 문서가 있을 경우 필드 유지
    #     # 1️⃣ 음성 파일 Firebase Storage에 업로드
    #     file_url, storage_path = upload_audio_file(file, consult_id)

    #     # 2️⃣ 음성 파일 길이 측정
    #     duration = get_audio_length(storage_path)

    #     # 3️⃣ Whisper API로 텍스트 변환
    #     transcript_text = transcribe_audio(storage_path, consult_id)

    #     # 4️⃣ 변환된 텍스트를 Firebase Storage에 저장
    #     text_file_url = save_text_to_storage(consult_id, transcript_text)

    #     # 5️⃣ STT 변환 완료 후 자동으로 요약 실행 ✅
    #     summary_result = process_summary(consult_id)
    #     summary_text = summary_result["summary_text"]
    #     summary_file_url = summary_result["summary_file_url"]

    #     # 6️⃣ Firestore에 데이터 저장
    #     save_to_firestore(consult_id, file_url, transcript_text, text_file_url, summary_text, summary_file_url, duration)

        return {
            "message": "파일 변환 및 저장 성공",
            "file_url": file_url,
            "transcript_text": transcript_text,
            "text_file_url": text_file_url,
            "summary_text": summary_text,
            "summary_file_url": summary_file_url,
            "duration": f"{round(duration)}초"
        }
    except Exception as e:
        raise Exception(f"오디오 처리 실패: {str(e)}")
