import React, { useState } from "react"
import { Search } from "lucide-react"

const SearchBox = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("")

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || "검색 내용을 입력하세요"}
        style={styles.input}
      />
      <button style={styles.button} onClick={() => onSearch(query)}>
        <Search size={20} color="#6B7280" />
      </button>
    </div>
  )
}

const styles = {
  container: {
    position: "relative",
    width: "600px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    border: "2px solid #D1D5DB",
    padding: "5px 10px",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    padding: "8px",
    color: "#4B5563",
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
}

export default SearchBox
