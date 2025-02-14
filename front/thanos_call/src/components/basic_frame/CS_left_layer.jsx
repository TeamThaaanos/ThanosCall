import React from "react"
import CSProfileCard from "./CSProfileCard"
import CSButtonGroup from "./CSButtonGroup"
import CallActionGroup from "./CallActionGroup"
import Logo from "../../assets/images/Logo_Thanos_white.svg"
import profileImage from "../../assets/images/Profile_Mask.svg"

const CSLeftLayer = () => {
  return (
    <div style={styles.container}>
      <img style={styles.logoimage} src={Logo} alt="Logo" />
      <CSButtonGroup />
      <CSProfileCard
        image={profileImage}
        rank="신입"
        name="김사원"
        age={24}
        cases={7}
        duration="52분 34초"
      />
      <CallActionGroup />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b82f6",
  },
  logoimage: {
    width: "190px",
    height: "70px",
    objectFit: "contain",
    marginTop: "20px",
  },
}

export default CSLeftLayer
