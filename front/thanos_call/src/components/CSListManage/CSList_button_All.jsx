import React from "react"
import DateRangePicker from "./DateRangePicker"
import DropdownButtonGroup from "./DropdownButtonGroup"
import SearchBox from "./SearchBox"

const CS_button_bar = () => {
  return (
    <div style={styles.container}>
      <DateRangePicker />

      <DropdownButtonGroup />

      <SearchBox />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    backgroundColor: "#1E3A8A",
    padding: "10px 14px",
    borderRadius: "8px",
    height: "45px",
  },
}

export default CS_button_bar
