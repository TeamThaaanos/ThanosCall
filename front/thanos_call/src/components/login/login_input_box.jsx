import React from "react"

const InputField = ({ placeholder, type = "text" }) => {
  return <input type={type} placeholder={placeholder} style={styles.input} />
}

const styles = {
  input: {
    width: "200px",
    padding: "12px",
    fontSize: "16px",
    textAlign: "left",
    marginBottom: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    backgroundColor: "#f0f9ff",
    color: "#374151",
    outline: "none",
    transition: "border 0.2s, box-shadow 0.2s",

    ":focus": {
      border: "1px solid #3b82f6",
      boxShadow: "0px 0px 5px rgba(59, 130, 246, 0.5)",
    },
  },
}

export default InputField
