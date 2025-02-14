import React from "react"
import LogoLetter from "../../assets/images/Logo_letter_finger.svg"

const CSRightLayer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.topRight}>
        <img src={LogoLetter} alt="Logo" style={styles.logo} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#003E79",
    position: "relative",
  },
  topRight: {
    position: "absolute",
    top: "-100px",
    right: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "320px",
    height: "320px",
    objectFit: "contain",
  },
}

export default CSRightLayer
