import React from "react"

const CSFooterButtons = ({ onReplay }) => {
  return (
    <div style={styles.container}>
      <button style={styles.replayButton} onClick={onReplay}>
        📞 통화 재생
      </button>
    </div>
  )
}

// 스타일 객체
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#F3F4F6",
    borderTop: "1px solid #E5E7EB",
  },
  replayButton: {
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    padding: "12px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  },
}

export default CSFooterButtons
