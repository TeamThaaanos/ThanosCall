import React from "react"
import LogoLetter from "../../assets/images/Logo_letter_finger.svg"
import SearchableDashboard from "../boxes/SearchableDashboard"

const CSRightLayer = () => {
  return (
    <div style={styles.container}>
      {/* 오른쪽 상단 로고 */}
      <div style={styles.topRight}>
        <img src={LogoLetter} alt="Logo" style={styles.logo} />
      </div>

      {/* 중앙 콘텐츠 박스 */}
      <div style={styles.contentWrapper}>
        <div style={styles.leftBox}>
          <SearchableDashboard />
        </div>
        <div style={styles.rightBox}>
          {/* 여기에 다른 박스 또는 내용 추가 가능 */}
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    height: "100vhs",
    backgroundColor: "#003E79",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "150px",
    position: "relative", // 절대 위치 요소의 기준이 됨
  },
  topRight: {
    position: "absolute", // 절대 위치 설정
    top: "-130px", // 상단 여백
    right: "30px", // 오른쪽 끝에 배치
  },
  logo: {
    width: "300px", // 로고 크기 조정
    height: "300px",
    objectFit: "contain",
  },
  contentWrapper: {
    display: "flex",
    maxWidth: "1200px",
    width: "100%",
    justifyContent: "space-between",
    gap: "20px",
  },
  leftBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  rightBox: {
    flex: 1,
  },
}

export default CSRightLayer
