import React from "react"
import CallActionButton from "./CallActionButton"

const CallActionGroup = () => {
  return (
    <div style={styles.container}>
      <CallActionButton type="accept" onClick={() => alert("Call Accepted!")} />
      <CallActionButton
        type="decline"
        onClick={() => alert("Call Declined!")}
      />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    backgroundColor: "#3b82f6",
    padding: "20px",
    borderRadius: "10px",
  },
}

export default CallActionGroup
