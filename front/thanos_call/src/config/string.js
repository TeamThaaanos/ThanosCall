export const STRINGS = {
  BASIC_FRAME: {
    CALL_ACTION_BUTTON: {
      ACCEPT_SMALL: "accept",
      ACCEPT: "Accept",
      DECLINE: "Decline",
    },
    CSButtonGroup: {
      CS_MANAGE: "CS 내역 관리",
      CS_MENUAL: "CS 메뉴얼 확인",
      CS_DATA: "CS 데이터 분석",
    },
    CSPROFILECARD: {
      USER_AGE: "나이 : ",
      USER_AGE_ACTUAL: "",
      USER_TODAY_COUNSEL_COUNT: "당일 상담 건수 : ",
      USER_TODAY_COUNSEL_COUNT_ACTUAL: "{cases}통",
      USER_TODAY_COUNSEL_TIME: "당일 상담 시간 :",
      RANK: "{RANK}",
      RANK_REPLACE: "신입",
      NAME: "{NAME}",
      NAME_REPLACE: "홍길동",
      AGE: "{AGE}",
      AGE_REPLACE: "21",
      CASES: "{CASES}",
      CASES_REPLACE: "21",
      DURATION: "{DURATION}",
      DURATION_REPLACE: "52분 13초",
    },
    CS_HEADER: {
      BACK_KEY: "← 뒤로 가기",
    },
  },
  LOGIN_FRAME: {
    LOGIN_BUTTON: {
      LOGIN: "로그인",
    },
    LOGIN_INTERFACE: {
      PLACEHOLDER: "사원 번호 or 사업자 번호",
      PASSWORD: "비밀번호",
    },
    LOGIN_FORM: {
      EMPLOYEE_NUMBER: "사원 번호 or 사업자 번호",
      PASSWORD: "비밀번호",
      LOGIN_SUCCESS: "{name}님, 로그인 성공!",
    },
  },
  CS_LIST_MANAGE: {
    SEARCHBOX: {
      SEARCH_TEXT: "검색 내용을 입력하세요",
    },
  },
  SERVICES: {
    AUTH_SERVICE: {
      ID_NO_EXIST: "아이디가 존재하지 않습니다.",
      PASSWORD_NO_EXIST: "비밀번호가 일치하지 않습니다.",
      LOGIN_SUCCESS: "로그인 성공!",
      LOGIN_ERROR: "로그인 중 오류가 발생했습니다.",
      ERROR: "로그인 에러",
    },
    FIREBASE: {},
  },
  BOXES: {
    ORDER_DETAILS: {
      ORDERNUMBER: "주문번호 {ORDERNUMBER}",
      NAME: "성함: {NAME}",
      CONTACT: "연락처: {CONTACT}",
      ADDRESS: "배송지: {ADDRESS}",
      PURCHASEDATE: "구매 일자: {PURCHASEDATE}",
      PRODUCTS: `구매 제품: {PRODUCTS}`,
      PAYMENT: "결제 금액: {PAYMENT}",
      REQUEST: "배송 요청 사항: {REQUEST}",
      CS_REQUEST_COUNT: "CS 요청 횟수: {CS_REQUEST_COUNT}회",
      REFUND_REQUEST_COUNT: "회원 환불 요청 횟수: {REFUND_REQUEST_COUNT}회",
      RETURN_REQUEST_COUNT: "반품 요청 횟수: {RETURN_REQUEST_COUNT}회",
      ABUSE_COUNT: "상담 간 폭언/욕설: {ABUSE_COUNT}회",
      // orderNumber: '주문번호 없음',
      // name: '이름 없음',
      // contact: '연락처 없음',
      // address: '배송지 없음',
      // purchaseDate: '구매일 없음',
      // products: '구매 내역 없음',
      // payment: '결제 정보 없음',
      // request: '배송 요청 사항 없음',
      // csRequestCount: 0,
      // refundRequestCount: 0,
      // returnRequestCount: 0,
      // abuseCount: 0,
    },
    QABox: {
      QUESTION: "Q. {QUESTION}",
      ANSWER: "A. {ANSWER}",
    },
  },
}
