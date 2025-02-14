import React from "react"

const InputField = ({ placeholder, type = "text" }) => {
  return <input type={type} placeholder={placeholder} style={styles.input} />
}

const styles = {
  input: {
    width: "15%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    backgroundColor: "#f0f9ff",
    color: "#374151",
    outline: "none",
    transition: "border 0.2s",
  },
}

export default InputField
