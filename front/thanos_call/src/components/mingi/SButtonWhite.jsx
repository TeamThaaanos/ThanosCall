import React from "react"

const SButtonWhite = ({ text = "알아서", onClick }) => {
  return (
    <button
      className="px-4 py-2 border border-blue-400 rounded-full bg-white text-gray-500 text-sm font-medium"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SButtonWhite
