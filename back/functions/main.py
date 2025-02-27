from firebase_functions import https_fn
import json
from flask import Request
from audio import process_audio_file

def make_response(data: dict, status: int = 200):
    """📌 JSON 응답을 생성하는 함수 (CORS 포함)"""
    return https_fn.Response(
        json.dumps(data, ensure_ascii=False),
        status=status,
        mimetype="application/json",
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    )

@https_fn.on_request(region="asia-northeast3")
def process_audio(req: Request) -> https_fn.Response:
    """📌 프론트엔드에서 업로드한 음성 파일을 Firebase Storage에 저장 후 텍스트 변환 및 Firestore에 저장"""
    try:
        if req.method == "OPTIONS":
            return make_response({"message": "CORS Preflight 성공"}, status=200)

        if req.method != "POST":
            return make_response({"error": "POST 요청만 허용됩니다."}, status=405)

        if "file" not in req.files or "consult_id" not in req.form:
            return make_response({"error": "파일과 consult_id가 필요합니다."}, status=400)

        file = req.files["file"]
        consult_id = req.form["consult_id"]

        # 🛠️ 음성 파일 처리 실행 (Storage + Whisper 변환 + Firestore 저장)
        result = process_audio_file(file, consult_id)

        return make_response(result)

    except ValueError as ve:
        return make_response({"error": f"잘못된 입력: {str(ve)}"}, status=400)

    except FileNotFoundError as fe:
        return make_response({"error": f"파일을 찾을 수 없음: {str(fe)}"}, status=404)

    except Exception as e:
        return make_response({"error": f"서버 오류: {repr(e)}"}, status=500)
    