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
        <Search size={18} color="#6B7280" />
      </button>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minWidth: "140px",
    maxWidth: "200px",
    height: "33px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    border: "1px solid #ccc",
    padding: "0 10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    padding: "5px 1px",
    color: "#4B5563",
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
    width: "30px",
    height: "30px",
  },
}

export default SearchBox
