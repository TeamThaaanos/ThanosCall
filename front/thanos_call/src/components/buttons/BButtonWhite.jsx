import React from "react"

const BButtonWhite = ({ text = "알아서", onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

const styles = {
  button: {
    border: "2px solid #3B82F6",
    color: "#4B5563",
    padding: "8px 16px",
    borderRadius: "9999px",
    backgroundColor: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
}

export default BButtonWhite
