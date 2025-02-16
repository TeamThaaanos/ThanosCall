import React, { useState } from "react"
import QABoxList from "./QABoxList"
import SearchBox from "./SearchBox"

const SearchableQAList = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <SearchBox
          placeholder="CS메뉴얼 키워드 검색"
          onSearch={setSearchQuery}
        />
        <QABoxList searchQuery={searchQuery} />
      </div>
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
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}

export default SearchableQAList
