import React from "react"

const SButtonColored = ({ text = "알아서", onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

const styles = {
  button: {
    backgroundColor: "#60A5FA",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "500",
    padding: "8px 16px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
}

export default SButtonColored
