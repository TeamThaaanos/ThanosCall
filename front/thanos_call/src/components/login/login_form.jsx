import React from "react"
import LoginButton from "./login_button_box"
import InputField from "./login_input_box"
import Logo from "../../assets/images/Logo_Thanos_color.svg"
import Logodown from "../../assets/images/Login_down_letter.svg"
import Cover from "../../assets/images/Login_cover.svg"
import { STRINGS } from "../../config/string"

const LoginForm = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.leftContainer}>
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

      <div style={styles.rightContainer} />
    </div>
  )
}

const styles = {
  wrapper: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
  leftContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: "20px",
  },
  rightContainer: {
    flex: 1,
    backgroundImage: `url(${Cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  logoimage: {
    width: "180px",
    height: "70px",
    objectFit: "contain",
    marginBottom: "20px",
  },
  logodownimage: {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    marginTop: "100px",
  },
}

export default LoginForm
