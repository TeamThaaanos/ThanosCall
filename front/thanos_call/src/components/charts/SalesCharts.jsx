import React from "react"
import BarChart from "./BarChart"
import PieChart from "./PieChart"

const SalesCharts = () => {
  const categorySalesData = [
    { category: "아우터", value: 60 },
    { category: "상의-롱슬리브", value: 100 },
    { category: "상의-숏슬리브", value: 10 },
    { category: "하의-롱팬츠", value: 80 },
    { category: "하의-숏팬츠", value: 5 },
  ]

  const top5SalesData = [
    { category: "A001 나이키 긴팔 티셔츠", value: 60 },
    { category: "J001 나이키 스우스 패딩", value: 40 },
    { category: "P002 아디다스 조거팬츠", value: 30 },
    { category: "J004 나이키 바람막이", value: 28 },
    { category: "P005 나이키 조거팬츠", value: 20 },
  ]

  const genderRatioData = [
    { name: "남성", value: 36 },
    { name: "여성", value: 64 },
  ]

  const inactiveMemberRatioData = [
    { name: "재구매 회원", value: 53.77 },
    { name: "3개월 이상 미구매 회원", value: 46.23 },
  ]

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <BarChart
          data={categorySalesData}
          title="기간 별 카테고리 별 판매 수량"
        />
        <BarChart data={top5SalesData} title="기간 별 판매 TOP 5" />
      </div>

      <div style={styles.row}>
        <PieChart
          data={genderRatioData}
          colors={["#E63946", "#F4F4F4"]}
          title="성별 구매 비율"
        />
        <PieChart
          data={inactiveMemberRatioData}
          colors={["#007bff", "#F4F4F4"]}
          title="3개월 이상 미구매 회원 비율"
        />
      </div>
    </div>
  )
}

// 스타일 객체
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#F3F4F6",
    borderRadius: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
}

export default SalesCharts
