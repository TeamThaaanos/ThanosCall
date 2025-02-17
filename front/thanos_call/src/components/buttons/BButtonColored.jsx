import React from "react"

const BButtonColored = ({ text = "알아서", onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

const styles = {
  button: {
    backgroundColor: "#3B82F6",
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px 24px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
}

export default BButtonColored
