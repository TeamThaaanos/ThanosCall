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
    width: "16.5%",
    padding: "12px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.2s",
  },
}

export default LoginButton
