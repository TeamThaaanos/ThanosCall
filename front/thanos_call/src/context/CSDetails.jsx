import React from "react"
import CSFooterButtons from "../components/buttons/CSFooterButtons"

const CSDetails = () => {
  const handleReplay = () => {
    console.log("통화 재생 클릭됨")
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>CS 상담 세부내역</h2>
      <h3 style={styles.subtitle}>
        2025.02.01 10:30 A001 제품 불량 항의 및 교환 요청
      </h3>

      <div style={styles.details}>
        <p>
          <strong>문의자:</strong> 강민기
        </p>
        <p>
          <strong>상담 매니저:</strong> 이종민
        </p>
        <p>
          <strong>상담 일자:</strong> 2025.02.01 10:30
        </p>
        <p>
          <strong>상담 카테고리:</strong> <strong>대분류</strong> 제품,{" "}
          <strong>소분류</strong> 제품 불량
        </p>
        <p>
          <strong>구매 여부:</strong> O
        </p>
        <p>
          <strong>주문 번호:</strong> 20250131_001
        </p>
        <p>
          <strong>제품 코드:</strong> A001 A002 A007
        </p>
        <p>
          <strong>상담 특이사항:</strong> 상담 간 구매자의 폭언, 욕설
        </p>
        <p>
          <strong>상담 시간:</strong> 14분
        </p>
      </div>

      <div style={styles.summary}>
        <h3>상담 내용 요약</h3>
        <ul>
          <li>A001 제품 박음질 불량</li>
          <li>물이 줄줄 흐르는 문제로 교환 요청</li>
          <li>교환 프로세스 안내 및 응대 완료</li>
        </ul>
      </div>

      {/* "상담 세부 내역" 제목과 버튼을 같은 줄에 배치 */}
      <div style={styles.chatHeader}>
        <h3>상담 세부 내역</h3>
        <CSFooterButtons onReplay={handleReplay} />
      </div>

      <div style={styles.chatHistory}>
        <p>여보세요 네, 안녕하세요 타노스 의류 상담사 이종민입니다...</p>
      </div>
    </div>
  )
}

// 스타일 객체
const styles = {
  container: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "700px",
    margin: "auto",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  details: {
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  summary: {
    backgroundColor: "#F3F4F6",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  chatHeader: {
    display: "flex",
    justifyContent: "space-between", // 제목과 버튼을 같은 줄에 배치
    alignItems: "center",
    marginBottom: "10px",
  },
  chatHistory: {
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#F9FAFB",
  },
}

export default CSDetails
