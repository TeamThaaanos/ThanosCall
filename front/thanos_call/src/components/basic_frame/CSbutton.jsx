import React from "react"

const CSButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={isActive ? styles.activeButton : styles.button}
    >
      {label}
    </button>
  )
}

const styles = {
  button: {
    width: "200px",
    padding: "12px",
    backgroundColor: "#f0f0f0",
    color: "#9e9e9e",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  },
  activeButton: {
    width: "200px",
    padding: "12px",
    backgroundColor: "#002F66",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  },
}

export default CSButton
