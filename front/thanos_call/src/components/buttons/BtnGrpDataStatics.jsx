import React, { useState } from "react"
import BButtonColored from "./BButtonColored"
import BButtonWhite from "./BButtonWhite"
import SButtonColored from "./SButtonColored"
import SButtonWhite from "./SButtonWhite"

const BtnGrpDataStatics = () => {
  const [selectedLarge, setSelectedLarge] = useState("데이터 표로 보기")
  const [selectedSmall, setSelectedSmall] = useState("상품 트렌드")

  return (
    <div style={styles.container}>
      <div style={styles.buttonWrapper}>
        <div style={styles.largeButtonGroup}>
          <BButtonWhite
            text="데이터 표로 보기"
            onClick={() => setSelectedLarge("데이터 표로 보기")}
            style={
              selectedLarge === "데이터 표로 보기"
                ? styles.activeWhite
                : styles.inactiveWhite
            }
          />
          <BButtonColored
            text="데이터 통계"
            onClick={() => setSelectedLarge("데이터 통계")}
            style={
              selectedLarge === "데이터 통계"
                ? styles.activeLarge
                : styles.inactiveLarge
            }
          />
          <BButtonWhite
            text="CS 통계"
            onClick={() => setSelectedLarge("CS 통계")}
            style={
              selectedLarge === "CS 통계"
                ? styles.activeWhite
                : styles.inactiveWhite
            }
          />
        </div>
      </div>

      <div style={styles.buttonWrapper}>
        <div style={styles.smallButtonGroup}>
          <SButtonWhite
            text="콜 정보"
            onClick={() => setSelectedSmall("콜 정보")}
            style={
              selectedSmall === "콜 정보"
                ? styles.activeSmallWhite
                : styles.inactiveSmallWhite
            }
          />
          <SButtonWhite
            text="회원 구성"
            onClick={() => setSelectedSmall("회원 구성")}
            style={
              selectedSmall === "회원 구성"
                ? styles.activeSmallWhite
                : styles.inactiveSmallWhite
            }
          />
          <SButtonColored
            text="상품 트렌드"
            onClick={() => setSelectedSmall("상품 트렌드")}
            style={
              selectedSmall === "상품 트렌드"
                ? styles.activeSmall
                : styles.inactiveSmall
            }
          />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: "20px",
    borderRadius: "10px",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  largeButtonGroup: {
    display: "flex",
    gap: "12px",
    justifyContent: "left",
    width: "500px",
  },
  smallButtonGroup: {
    display: "flex",
    gap: "12px",
    justifyContent: "left",
    width: "500px",
  },
  activeLarge: {
    backgroundColor: "#3B82F6",
    color: "#FFFFFF",
    width: "150px",
    textAlign: "center",
  },
  inactiveLarge: {
    backgroundColor: "#FFFFFF",
    color: "#3B82F6",
    border: "2px solid #3B82F6",
    width: "150px",
    textAlign: "center",
  },
  activeWhite: {
    backgroundColor: "#FFFFFF",
    color: "#3B82F6",
    fontWeight: "bold",
    border: "2px solid #3B82F6",
    width: "150px",
    textAlign: "center",
  },
  inactiveWhite: {
    backgroundColor: "#FFFFFF",
    color: "#6B7280",
    border: "2px solid #D1D5DB",
    width: "150px",
    textAlign: "center",
  },
  activeSmall: {
    backgroundColor: "#60A5FA",
    color: "#FFFFFF",
    width: "120px",
    textAlign: "center",
  },
  inactiveSmall: {
    backgroundColor: "#E5E7EB",
    color: "#6B7280",
    width: "120px",
    textAlign: "center",
  },
  activeSmallWhite: {
    backgroundColor: "#FFFFFF",
    color: "#6B7280",
    border: "1px solid #60A5FA",
    width: "120px",
    textAlign: "center",
  },
  inactiveSmallWhite: {
    backgroundColor: "#FFFFFF",
    color: "#6B7280",
    border: "1px solid #D1D5DB",
    width: "120px",
    textAlign: "center",
  },
}

export default BtnGrpDataStatics
