import React from "react"
import CSHeader from "../components/basic_frame/CSHeader.jsx"
import CSDetails from "../context/CSDetails.jsx"

const CSDetailPage = () => {
  const handleBack = () => {
    console.log("뒤로 가기 클릭됨")
  }

  return (
    <div style={styles.container}>
      {/* 상단 바 */}
      <CSHeader onBack={handleBack} />

      {/* 상담 세부내역 */}
      <CSDetails />
    </div>
  )
}

// 스타일 객체
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#1E293B", // 다크 모드 배경
  },
}

export default CSDetailPage
