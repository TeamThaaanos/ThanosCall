import React from "react"
import { STRINGS } from "../../config/string"

const LoginButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {STRINGS.LOGIN_FRAME.LOGIN.LOGIN}
    </button>
  )
}

const styles = {
  button: {
    width: "228px",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.2s",
  },
}

export default LoginButton
