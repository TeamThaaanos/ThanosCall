import React, { useState } from "react"
import CSButton from "./CSbutton"
import { STRINGS } from "../../config/string"

const CSButtonGroup = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <div style={styles.container}>
      <CSButton
        label={STRINGS.BASIC_FRAME.CSButtonGroup.CS_MANAGE}
        isActive={activeIndex === 0}
        onClick={() => setActiveIndex(0)}
      />
      <CSButton
        label={STRINGS.BASIC_FRAME.CSButtonGroup.CS_MENUAL}
        isActive={activeIndex === 1}
        onClick={() => setActiveIndex(1)}
      />
      <CSButton
        label={STRINGS.BASIC_FRAME.CSButtonGroup.CS_DATA}
        isActive={activeIndex === 2}
        onClick={() => setActiveIndex(2)}
      />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#3b82f6",
    padding: "20px",
    borderRadius: "10px",
  },
}

export default CSButtonGroup
