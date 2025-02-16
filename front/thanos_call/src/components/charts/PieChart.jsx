import React from "react"
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const PieChart = ({ data, colors, title }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <ResponsiveContainer width="100%" height={250}>
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </RechartsPieChart>
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
    textAlign: "center",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#333",
  },
}

export default PieChart

// npm install recharts 설치 해야함
