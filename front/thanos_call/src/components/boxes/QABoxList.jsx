import React, { useState } from "react"
import QABox from "./QABox"

const QABoxList = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const qaData = [
    {
      question: "사이즈 교환 문의",
      answer: "재고 여부 확인 후 교환 프로세스 안내",
      details: ["재고 여부 확인 URL", "교환 프로세스 안내 URL"],
    },
    {
      question: "배송 지연에 관한 문의",
      answer: "운송장 번호 조회 후 예상 소요 시간 안내",
      details: [],
    },
    {
      question: "제품 불량 항의",
      answer: "제품 불량 건에 대한 사과 진행",
      details: [],
    },
    {
      question: "사이즈 교환 문의",
      answer: "재고 여부 확인 후 교환 프로세스 안내",
      details: ["재고 여부 확인 URL", "교환 프로세스 안내 URL"],
    },
    {
      question: "사이즈 교환 문의",
      answer: "재고 여부 확인 후 교환 프로세스 안내",
      details: ["재고 여부 확인 URL", "교환 프로세스 안내 URL"],
    },
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div style={styles.container}>
      {/* 왼쪽 주문 정보 */}

      {/* 오른쪽 QA 목록 */}
      <div style={styles.commonBox}>
        {qaData.map((qa, index) => (
          <QABox
            key={index}
            question={qa.question}
            answer={qa.answer}
            details={qa.details}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    maxWidth: "1200px",
    margin: "auto",
    padding: "10px",
  },
  commonBox: {
    width: "600px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    border: "2px solid #000080",
    padding: "10px",
  },
}

export default QABoxList
