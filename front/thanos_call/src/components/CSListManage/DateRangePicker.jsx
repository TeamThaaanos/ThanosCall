import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { FaRegCalendarAlt } from "react-icons/fa"
import { format } from "date-fns"
import ko from "date-fns/locale/ko"

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date(2025, 2, 15))
  const [endDate, setEndDate] = useState(new Date(2025, 5, 25))
  const [showPicker, setShowPicker] = useState(false)
  const [appliedStartDate, setAppliedStartDate] = useState(startDate)
  const [appliedEndDate, setAppliedEndDate] = useState(endDate)

  const applyDateRange = () => {
    setAppliedStartDate(startDate)
    setAppliedEndDate(endDate)
    setShowPicker(false)
  }

  return (
    <div style={styles.container}>
      <div style={styles.dateInput} onClick={() => setShowPicker(!showPicker)}>
        <span>
          {format(appliedStartDate, "yyyy. M. d.")} ~{" "}
          {format(appliedEndDate, "yyyy. M. d.")}
        </span>
        <FaRegCalendarAlt style={styles.icon} />
      </div>

      {showPicker && (
        <div style={styles.calendarContainer}>
          <div style={styles.datePickers}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              locale={ko}
              dateFormat="yyyy. M. d."
              inline
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              locale={ko}
              dateFormat="yyyy. M. d."
              inline
            />
          </div>

          <div style={styles.buttonContainer}>
            <button style={styles.applyButton} onClick={applyDateRange}>
              적용
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dateInput: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    padding: "8px 12px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    border: "1px solid #ccc",
    cursor: "pointer",
    width: "fit-content",
    fontSize: "14px",
  },
  icon: {
    marginLeft: "8px",
    color: "#999",
    fontSize: "16px",
    cursor: "pointer",
  },
  calendarContainer: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    border: "1px solid #ccc",
    zIndex: 10,
    width: "fit-content",
  },
  datePickers: {
    display: "flex",
    gap: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  },
  applyButton: {
    backgroundColor: "black",
    color: "white",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  },
}

export default DateRangePicker
