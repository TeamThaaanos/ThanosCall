import React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const QABox = ({ question, answer, details, isOpen, onClick }) => {
  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isOpen ? "#E8F0FE" : "#FFFFFF",
        borderColor: isOpen ? "#1E40AF" : "#3B82F6",
      }}
      onClick={onClick}
    >
      <div style={styles.header}>
        <div style={styles.row}>
          <p style={styles.question}>Q. {question}</p>
          {isOpen ? (
            <ChevronUp size={18} color="#1E40AF" />
          ) : (
            <ChevronDown size={18} color="#1E40AF" />
          )}
        </div>
        <p style={styles.answer}>A. {answer}</p>
      </div>

      {isOpen && (
        <div style={styles.details}>
          {details.length > 0 ? (
            details.map((detail, index) => (
              <p key={index} style={styles.detailText}>
                {detail}
              </p>
            ))
          ) : (
            <p style={styles.detailText}>추가 정보 없음</p>
          )}
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    border: "2px solid #3B82F6",
    borderRadius: "8px",
    width: "600px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    margin: "1px 0",
    marginTop: "5px",
  },
  header: {
    padding: "8.4px",
    borderRadius: "6px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    color: "#1E40AF",
    fontWeight: "bold",
    fontSize: "18px",
  },
  answer: {
    color: "#1E3A8A",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "1px",
  },
  details: {
    marginTop: "4px",
    color: "#374151",
    padding: "1px",
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
  },
  detailText: {
    marginTop: "4px",
    fontSize: "14px",
  },
}

export default QABox
