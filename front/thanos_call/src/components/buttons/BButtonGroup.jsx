import React, { useState } from "react"
import BButtonWhite from "./BButtonWhite"
import BButtonColored from "./BButtonColored"

const BButtonGroup = () => {
  const [selected, setSelected] = useState("데이터 표로 보기")

  const buttons = ["데이터 표로 보기", "데이터 통계", "CS 통계"]

  return (
    <div style={styles.container}>
      {buttons.map((buttonText) =>
        selected === buttonText ? (
          <BButtonColored
            key={buttonText}
            text={buttonText}
            onClick={() => setSelected(buttonText)}
          />
        ) : (
          <BButtonWhite
            key={buttonText}
            text={buttonText}
            onClick={() => setSelected(buttonText)}
          />
        )
      )}
    </div>
  )
}

// 스타일 객체
const styles = {
  container: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

export default BButtonGroup
