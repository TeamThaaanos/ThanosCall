export const STRINGS = {
  LOGIN_FRAME: {
    LOGIN_BUTTON: {
      LOGIN: "로그인",
      LOGIN_SUCCESS: "로그인 성공!",
    },
    LOGIN_INTERFACE: {
      PLACEHOLDER: "사원 번호 or 사업자 번호",
      PASSWORD: "비밀번호",
    },
    LOGIN_FORM: {
      EMPLOYEE_NUMBER: "사원 번호 or 사업자 번호",
      PASSWORD: "비밀번호",
      LOGIN_SUCCESS: "로그인 성공!",
    },
  },
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
    CS_HEADER: {
      BACK_KEY: "← 뒤로 가기",
    },
    CS_PROFILECARD: {
      NO_RANK: "직급 없음",
      NO_NAME: "이름 없음",
      NO_INFO: "정보 없음",
      AGE: "나이 : 만",
      USER_AGE: "나이 : 만 {count} 세",
      USER_CONSULT_COUNT: "당일 상담 건수 : {count} 통",
      USER_CONSULT_TIME: "당일 상담 시간 : {count} 분",
    },
    DATA_FRAME: "데이터가 없습니다.",
    FILE_UPLOAD_MODAL: {
      TAKE_IT: "가져오기",
      VOICE_FILE_TAKE: "음성 파일 가져오기",
      CLOSE: "닫기",
      CHECK: "확인",
    },
  },
  CS_LIST_MANAGE: {
    CONSULT_DETAIL: {
      BACK: "뒤로 가기",
      CS_CONSULT_DETAIL: "CS 상담 세부내역",
      NO_DATE_INFO: "날짜 정보 없음",
      NO_CATEGORY_INFO: "카테고리 없음",
      CUSTOMER: "문의자 : ",
      CONSULTER: "상담 매니저 : ",
      CONSULT_DATE: "상담 일자 : ",
      CONSULT_CATEGORY: "상담 카테고리 : ",
      PURCHASE_CHECK: "구매 여부 : ",
      ORDER_NUMBER: "주문 번호 : ",
      ITEM_CODE: "제품 코드 : ",
      CONSULT_ADD: "상담 특이사항 : ",
      CONSULT_TIME: "상담 시간 : ",
      CONSULT_BRIEF: "상담 내용 요약",
      CONSULT_BRIEF_NO: "내용 없음",
      CONSULT_DETAILS: "상담 세부 내역",
      CONSULT_DETAILS_NO: "상세 내역 없음",
      NO: "없음",
    },
    SEARCHBOX: {
      SEARCH_TEXT: "검색 내용을 입력하세요",
    },
    DROPDOWN_BUTTON_GRP: {
      CONSULTER: "상담자",
      CATEGORY: "카테고리",
      COMPLETE_CHECK: "완료 여부",
      CONSULTANTS: {
        CONSULTANT1: "김사원",
        CONSULTANT2: "이사원",
        CONSULTANT3: "삼사원",
      },
      CATEGORIES: {
        CATE1: "배송",
        CATE2: "교환",
      },
      STATUES: {
        STATUE1: "완료",
        STATUE2: "진행 중",
      },
    },
    SEARCH_FILTER_BAR: {
      CONSULTER: "상담자",
      CATEGORY: "카테고리",
      COMPLETE_CHECK: "완료 여부",
      SEARCH_INPUT: "검색어를 입력하세요",
      ALL: "ALL",
      CONSULTANTS: {
        CONSULTANT1: "김사원",
        CONSULTANT2: "이사원",
        CONSULTANT3: "삼사원",
      },
      CATEGORIES: {
        CATE1: "배송",
        CATE2: "교환",
        CATE3: "환불",
      },
      STATUES: {
        STATUE1: "완료",
        STATUE2: "진행 중",
      },
    },
    DATE_RANGE_PICKER: "적용",
  },
  CS_DATA_ANALYSIS: {
    BUTTONS: {
      TEXT: "알아서",
      VOICE_PLAY: "통화 재생",
      BTN_GRP_DF: {
        DATA_CHART_VIEW: "데이타 표로 보기",
        DATA_ALL: "전체",
        USER_INFO: "회원 정보",
        PRODUCT_LOG: "구매/물류",
        ORDER_LOG: "주문 내역",
        DATA_STATIC: "데이터 통계",
        USER_COMPO: "회원 구성",
        ITEM_TREND: "상품 트렌드",
        CS_STATIC: "CS 통계",
        CALL_INFO: "콜 정보",
        CONSUL_STATIC: "상담원 정보",
      },
    },
    CHARTS: {
      BARCHART: {
        PERIOD: "기간",
        SELEC_PERIOD: "선택된 기간",
        TIME_WEEK: "1주",
        TIME_MONTH1: "1개월",
        TIME_MONTH3: "3개월",
        TIME_MONTH6: "6개월",
        TIME_YEAR: "1년",
      },
      CALL_INFO_STATICS_CHART: {
        MONTH_CONSULT_COUNT: "월별 상담 건수",
        CALL_CATEGORY_DATA: "상담 유형별 건수",
        DATA_LOADING: "데이터를 불러오는 중...",
        ETC: "기타",
        PRE_MONTH: "전월",
      },
      CS_STATIC_CHART: {
        WEEK: "주간",
        MONTH: "월간",
        PERIOD: "기간",
      },
      PRD_DATA_STATICS_CHART: {
        WEEK: "주간",
        MONTH: "월간",
        MALE: "남성",
        FEMALE: "여성",
        RE_BUY_USER: "재구매 회원",
        NO_BUY_USER: "미구매 회원",
        TEEN: "10대",
        TWIN: "20대",
        THRE: "30대",
        FOUR: "40대",
        CATEGORY_SALE_STATIC: "카테고리 별 판매 통계",
        GENERATION_COUNT: "연령별 회원 수",
        NO_DATA: "데이터 없음",
        ALL_GENDER_PERCENT: "전체 남성/여성 구매 비율 : 70% / 30%",
        RE_BUY_PERCENT: "재구매 회원 비율 : 25%",
        THREE_MONTH_NO_BUY: "3개월 이상 미구매 회원 비율 : 5%",
      },
      USER_DATA_STATICS_CHART: {
        WEEK: "주간",
        MONTH: "월간",
        MALE: "남성",
        FEMALE: "여성",
        RE_BUY_USER: "재구매 회원",
        NO_BUY_USER: "미구매 회원",
        THREE_MONTH_NO: "3개월 이상 미구매",
        CATEGORY_SALE_STATIC: "카테고리 별 판매 통계",
        GENERATION_COUNT: "연령별 회원 수",
        NO_DATA: "데이터 없음",
        MONTH_SIGN_STATIC: "월별 회원 가입 통계",
        GENER_USER_COUNT: "연령별 회원 수",
        GENDER_PRECENT: "성별 비율",
        RE_BUY_PRECENT: "재구매 회원 비율",
        THREE_MONTH_NO_BUY: "3개월 이상 미구매 회원 비율",
      },
    },
    DATA_FRAME_MUL: {
      NO_SAVE_EMPTY: "저장할 데이터가 없습니다",
      EXCEL_ICON: "엑셀 아이콘",
      EXCEL_SAVE: "엑셀 저장",
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
    CONSULT_MEMO: {
      CUSTOMER_CONSULT_INPUT: "[회원 상담 입력]",
      CUNSULT_INPUT: "상담시 내용을 입력해 주세요",
    },
    ORDER_DETAILS: {
      CORREC_NUMBER: "올바른 주문 번호를 입력하세요.",
      NOT_FIND_ORDER_INFO: "주문 정보를 찾을 수 없습니다.",
      DATA_TAKE_ERROR: "데이터 불로오기 오류",
      DATA_TAKE_ERROR_INCUR: "데이터를 가져오는 중 오류가 발생했습니다.",
      LOADING: "로딩중...",
      ORDER_NUMBER: "주문 번호: ",
      NAME: "성함: ",
      EMAIL: "이메일: ",
      CONTACT: "연락처: ",
      ADDRESS: "배송지: ",
      PURCHASE_DATE: "구매 일자: ",
      PURCHASE_ITEM: "구매 제품: ",
      BILL_COUNT: "결제 금액: ",
      SHIP_REQUEST_DETAIL: "배송 요청 사항: ",
    },
    QABOXLIST: {
      FAQS: {
        QUESTION_1: "사이즈 교환 문의",
        ANSWER_1: "재고 여부 확인 후 교환 프로세스 안내",
        DETAILS_1:
          "상품의 재고 여부를 먼저 확인한 후 교환 절차를 진행합니다.\n교환 신청 방법과 배송 절차를 안내해 드립니다.",
        QUESTION_2: "배송 지연에 관한 문의",
        ANSWER_2: "운송장 번호 조회 후 예상 소요 시간 안내",
        DETAILS_2:
          "현재 배송 상황을 운송장 번호로 확인할 수 있습니다.\n예상 도착 날짜와 추가 배송 지연 사유를 안내드립니다.",
        QUESTION_3: "제품 불량 항의",
        ANSWER_3: "제품 불량 건에 대한 사고 진행",
        DETAILS_3:
          "제품 불량 신고 후 처리 절차가 진행됩니다.\n반품 및 환불 규정에 따라 보상 여부를 확인해 주세요.",
        QUESTION_4: "상품 반품 문의",
        ANSWER_4: "재고 반품 여부 확인 후 교환 프로세스 안내",
        DETAILS_4:
          "상품의 반품을 원하시면 해당 2-3일 정도의 소요 시간이 걸리게 됩니다. 다시 한번 검토 하신 후 진행하시길 바랍니다.\n반품 가능 여부와 절차는 고객센터에서 더 자세히 안내드립니다.",
        QUESTION_5: "주문 취소 문의",
        ANSWER_5: "주문 취소 가능 여부 및 절차 안내",
        DETAILS_5:
          "결제 완료 후 일정 시간 내에는 주문 취소가 가능합니다.\n자세한 취소 방법과 환불 절차를 안내해 드립니다.",
      },
      NO_SEARCH_RESULT: "검색 결과가 없습니다.",
    },
    RETURN_EXCHANGE: {
      CORREC_NUMBER: "올바른 주문 번호를 입력하세요.",
      NOT_FIND_ORDER_INFO: "주문 정보를 찾을 수 없습니다.",
      DATA_TAKE_ERROR_INCUR: "데이터를 가져오는 중 오류가 발생했습니다.",
      LOADING: "로딩중...",
      CUSTOMER_CONSULT_INFO: "[회원 상담 정보]",
      CS_REQUEST_COUNT: "CS 요청 횟수: {count} 회",
      EXCHANGE_REQUEST_COUNT: "회원 환불 요청 횟수: {count} 회",
      RETURN_REQUEST_COUNT: "반품 요청 횟수: {count} 회",
      INSULT: "상담간 욕설/폭언: {count} 회",
    },
    SEARCHABLE_ORDER_DETAILS: "주문 번호를 입력하세요.",
    SEARCHABLE_QA_LIST: "CS메뉴얼 키워드 검색",
    SEARCHBOX: "검색 내용을 입력하세요",
  },
}
