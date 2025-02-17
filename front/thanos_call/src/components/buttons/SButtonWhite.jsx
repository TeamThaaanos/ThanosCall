import React from "react"

const SButtonWhite = ({ text = "알아서", onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

const styles = {
  button: {
    padding: "8px 16px",
    border: "1px solid #60A5FA",
    borderRadius: "9999px",
    backgroundColor: "#FFFFFF",
    color: "#6B7280",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s ease, color 0.2s ease",
  },
}

export default SButtonWhite
