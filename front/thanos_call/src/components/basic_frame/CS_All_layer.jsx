import React from "react"
import CSLeftLayer from "./CS_left_layer"
import CSRightLayer from "./CS_Right_layer"

const CSAllLayer = () => {
  return (
    <div style={styles.container}>
      <CSLeftLayer />

      <CSRightLayer />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
}

export default CSAllLayer
