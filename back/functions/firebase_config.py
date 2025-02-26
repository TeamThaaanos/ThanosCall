import os
import firebase_admin
from firebase_admin import credentials, firestore, storage

# 현재 파일의 디렉토리를 기준으로 절대 경로 설정
SERVICE_ACCOUNT_PATH = os.path.join(os.path.dirname(__file__), "serviceAccountKey.json")

# Firebase Admin SDK 초기화
if not firebase_admin._apps:
    cred = credentials.Certificate(SERVICE_ACCOUNT_PATH)
    firebase_admin.initialize_app(cred, {
        'storageBucket': 'your-project-id.appspot.com'
    })

db = firestore.client()
bucket = storage.bucket()