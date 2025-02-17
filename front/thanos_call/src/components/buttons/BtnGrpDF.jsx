import React, { useState } from "react"
import BButtonColored from "./BButtonColored"
import BButtonWhite from "./BButtonWhite"
import SButtonColored from "./SButtonColored"
import SButtonWhite from "./SButtonWhite"

const BtnGrpDF = () => {
  const [selectedLarge, setSelectedLarge] = useState("데이터 표로 보기")
  const [selectedSmall, setSelectedSmall] = useState("구매/물류")

  return (
    <div style={styles.container}>
      <div style={styles.buttonWrapper}>
        <div style={styles.largeButtonGroup}>
          <BButtonColored
            text="데이터 표로 보기"
            onClick={() => setSelectedLarge("데이터 표로 보기")}
            style={
              selectedLarge === "데이터 표로 보기"
                ? styles.activeLarge
                : styles.inactiveLarge
            }
          />
          <BButtonWhite
            text="데이터 통계"
            onClick={() => setSelectedLarge("데이터 통계")}
            style={
              selectedLarge === "데이터 통계"
                ? styles.activeWhite
                : styles.inactiveWhite
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
            text="전체"
            onClick={() => setSelectedSmall("전체")}
            style={
              selectedSmall === "전체"
                ? styles.activeSmallWhite
                : styles.inactiveSmallWhite
            }
          />
          <SButtonWhite
            text="회원 정보"
            onClick={() => setSelectedSmall("회원 정보")}
            style={
              selectedSmall === "회원 정보"
                ? styles.activeSmallWhite
                : styles.inactiveSmallWhite
            }
          />
          <SButtonColored
            text="구매/물류"
            onClick={() => setSelectedSmall("구매/물류")}
            style={
              selectedSmall === "구매/물류"
                ? styles.activeSmall
                : styles.inactiveSmall
            }
          />
          <SButtonWhite
            text="통화 내역"
            onClick={() => setSelectedSmall("통화 내역")}
            style={
              selectedSmall === "통화 내역"
                ? styles.activeSmallWhite
                : styles.inactiveSmallWhite
            }
          />
          <SButtonWhite
            text="상품 내역"
            onClick={() => setSelectedSmall("상품 내역")}
            style={
              selectedSmall === "상품 내역"
                ? styles.activeSmallWhite
                : styles.inactiveSmallWhite
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
    width: "100px",
    textAlign: "center",
  },
  inactiveSmall: {
    backgroundColor: "#E5E7EB",
    color: "#6B7280",
    width: "100px",
    textAlign: "center",
  },
  activeSmallWhite: {
    backgroundColor: "#FFFFFF",
    color: "#6B7280",
    border: "1px solid #60A5FA",
    width: "100px",
    textAlign: "center",
  },
  inactiveSmallWhite: {
    backgroundColor: "#FFFFFF",
    color: "#6B7280",
    border: "1px solid #D1D5DB",
    width: "100px",
    textAlign: "center",
  },
}

export default BtnGrpDF
