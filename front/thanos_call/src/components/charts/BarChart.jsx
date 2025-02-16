import React from "react"
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const BarChart = ({ data, title }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#007bff" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

const styles = {
  container: {
    padding: "16px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#333",
  },
}

export default BarChart

//npm install recharts 설치 해야함
//기본적으로 바 차트는 세로방향으로 출력된다 | 가로방향 바 차트를 사용하기 위해선 layout = "verical" 옵션을 넣어줘야한다
