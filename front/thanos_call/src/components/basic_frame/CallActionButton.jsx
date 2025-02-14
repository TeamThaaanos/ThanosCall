import React from "react"
import blueCallIcon from "../../assets/images/blue_call.svg"
import grayCallIcon from "../../assets/images/gray_call.svg"

const CallActionButton = ({ type, onClick }) => {
  const isAccept = type === "accept"
  const icon = isAccept ? blueCallIcon : grayCallIcon
  const text = isAccept ? "Accept" : "Decline"

  return (
    <div style={styles.container} onClick={onClick}>
      <div style={styles.button}>
        <img src={icon} alt={text} style={styles.icon} />
      </div>
      <p style={styles.text}>{text}</p>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
  button: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
  icon: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
    borderRadius: "50%",
  },
  text: {
    marginTop: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
  },
}

export default CallActionButton
