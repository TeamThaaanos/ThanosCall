import React from "react"
import { STRINGS } from "../../config/string"

const CSProfileCard = ({ image, rank, name, age, cases, duration }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header} />
      <img src={image} alt="Profile" style={styles.profileImage} />
      <div style={styles.content}>
        <p style={styles.rank}>
          {rank} <strong style={styles.name}>{name}</strong>
        </p>
        <div style={styles.infoBox}>
          <p>
            <strong>{STRINGS.BASIC_FRAME.CSPROFILECARD.USER_AGE}</strong>
            {STRINGS.BASIC_FRAME.CSPROFILECARD.USER_AGE_ACTUAL.replace(
              "{age}",
              age
            )}
          </p>
          <p>
            <strong>
              {STRINGS.BASIC_FRAME.CSPROFILECARD.USER_TODAY_COUNSEL_COUNT}
            </strong>
            {STRINGS.BASIC_FRAME.CSPROFILECARD.USER_TODAY_COUNSEL_COUNT_ACTUAL.replace(
              "{cases}",
              cases
            )}
          </p>
          <p>
            <strong>
              {STRINGS.BASIC_FRAME.CSPROFILECARD.USER_TODAY_COUNSEL_TIME}
            </strong>{" "}
            {duration}
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    width: "210px",
    borderRadius: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    height: "90px",
    backgroundColor: "#4da6ff",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginTop: "-60px",
    border: "3px solid white",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
  },
  rank: {
    fontSize: "14px",
    color: "#777",
    marginTop: "5px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  infoBox: {
    backgroundColor: "#f5f5f5",
    padding: "5px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    marginTop: "10px",
    textAlign: "left",
    fontSize: "12px",
  },
}

export default CSProfileCard
