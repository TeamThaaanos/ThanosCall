import React from "react"
import LoginButton from "./login_button_box"
import InputField from "./login_input_box"
import Logo from "../../assets/images/Logo_Thanos_color.svg"
import Logodown from "../../assets/images/Login_down_letter.svg"
import { STRINGS } from "../../config/string"

const LoginForm = () => {
  return (
    <div style={styles.container}>
      <img style={styles.logoimage} src={Logo} alt="Logo" />
      <InputField
        placeholder={STRINGS.LOGIN_FRAME.LOGIN_FORM.EMPLOYEE_NUMBER}
      />
      <InputField
        placeholder={STRINGS.LOGIN_FRAME.LOGIN_FORM.PASSWORD}
        type="password"
      />
      <LoginButton />
      <img style={styles.logodownimage} src={Logodown} alt="Logo" />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f3e5e5",
    padding: "20px",
  },
  logoimage: {
    width: "180px",
    height: "70px",
    objectFit: "contain",
    marginTop: "20px",
  },
  logodownimage: {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    marginTop: "100px",
  },
}

export default LoginForm
