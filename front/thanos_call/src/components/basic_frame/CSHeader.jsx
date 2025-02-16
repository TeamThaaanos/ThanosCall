import React from "react"

const CSHeader = ({ onBack }) => {
  return (
    <div style={styles.header}>
      <button style={styles.backButton} onClick={onBack}>
        ← 뒤로 가기
      </button>
    </div>
  )
}

// 스타일 객체
const styles = {
  header: {
    backgroundColor: "#1E3A8A",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#E5E7EB",
    border: "none",
    padding: "10px 16px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
}

export default CSHeader
