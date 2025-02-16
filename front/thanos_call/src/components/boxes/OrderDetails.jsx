import React, { useState } from "react"

const OrderDetails = () => {
  const [message, setMessage] = useState("")

  return (
    <div style={styles.container}>
      <div style={styles.orderSection}>
        <h2 style={styles.orderNumber}>주문 번호 20250131_001</h2>

        <div style={styles.info}>
          <strong>성함</strong> <span>강민기</span>
        </div>
        <div style={styles.info}>
          <strong>회원ID</strong> <span>kingmingi2003 (or 비회원)</span>
        </div>
        <div style={styles.info}>
          <strong>연락처</strong> <span>010 3003 3022</span>
        </div>
        <div style={styles.info}>
          <strong>배송지</strong>{" "}
          <span>서울시 관악구 신림 3동 28-39 201호</span>
        </div>
        <div style={styles.info}>
          <strong>구매 일자</strong> <span>2025.01.29</span>
        </div>
        <div style={styles.info}>
          <strong>구매 제품</strong>
          <span>
            A001 나이키 티셔츠 / L / 1EA / 상품페이지URL <br />
            A003 리바이스 청바지 / 28 / 1EA / 상품페이지URL <br />
            A004 발가락 양말 / 흰색 / 3EA / 상품페이지URL
          </span>
        </div>
        <div style={styles.info}>
          <strong>결제 금액</strong> <span>83,000원</span>
        </div>
        <div style={styles.info}>
          <strong>배송 요청 사항</strong> <span>도야짬뽕 최고</span>
        </div>
      </div>

      <div style={styles.customerSection}>
        <h3>[회원 상담 정보]</h3>
        <p>CS 요청 횟수 1회</p>
        <p>회원 환불 요청 횟수 1회</p>
        <p>반품 요청 횟수 0회</p>
        <p>상담 간 폭언/욕설 0회</p>
      </div>

      <div style={styles.inputSection}>
        <h3>[회원 상담 입력]</h3>
        <textarea
          style={styles.textArea}
          placeholder="상담 내용을 입력해 주세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "600px",
    margin: "auto",
    padding: "10px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    border: "2px solid #000080",
  },
  orderSection: {
    padding: "10px",
    borderRadius: "8px",
  },
  orderNumber: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
    fontSize: "14px",
  },
  customerSection: {
    borderRadius: "8px",
    fontSize: "14px",
    left: "20px",
  },
  inputSection: {
    margin: "0 5",
    borderRadius: "8px",
    fontSize: "14px",
  },
  textArea: {
    width: "95%",
    height: "60px",
    padding: "8px",
    borderRadius: "6px",
    backgroundColor: "#EDEDED",
    border: "1px solidrgb(255, 255, 255)",
    outline: "none",
    fontSize: "14px",
    resize: "none",
  },
}

export default OrderDetails
