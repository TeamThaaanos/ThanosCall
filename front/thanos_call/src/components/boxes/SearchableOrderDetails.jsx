import React, { useState } from "react"
import SearchBox from "./SearchBox"
import OrderDetails from "./OrderDetails"

const SearchableOrderDetails = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div style={styles.container}>
      <SearchBox placeholder="주문 번호를 입력하세요" onSearch={handleSearch} />

      {searchQuery ? (
        <p style={styles.searchResult}>검색된 주문 번호: {searchQuery}</p>
      ) : null}

      <OrderDetails />
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "auto",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  searchResult: {
    color: "#1E40AF",
    fontSize: "14px",
    fontWeight: "bold",
  },
}

export default SearchableOrderDetails
