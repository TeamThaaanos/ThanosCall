import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const DropdownButton = ({ options, onSelect, defaultLabel }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultLabel)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div style={styles.dropdownContainer}>
      <button style={styles.dropdownButton} onClick={toggleDropdown}>
        <span style={styles.buttonText}>{selectedOption}</span>
        {isOpen ? (
          <FaChevronUp style={styles.icon} />
        ) : (
          <FaChevronDown style={styles.icon} />
        )}
      </button>

      {isOpen && (
        <ul style={styles.dropdownList}>
          {options.map((option, index) => (
            <li
              key={index}
              style={styles.dropdownItem}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const styles = {
  dropdownContainer: {
    position: "relative",
    display: "inline-block",
  },
  dropdownButton: {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },
  buttonText: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    marginRight: "8px",
  },
  icon: {
    color: "#999",
  },
  dropdownList: {
    position: "absolute",
    left: "0",
    top: "100%",
    marginTop: "4px",
    width: "100%",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(192, 154, 154, 0.1)",
    listStyle: "none",
    padding: "4px 0",
    zIndex: 100,
  },
  dropdownItem: {
    padding: "8px 12px",
    fontSize: "14px",
    color: "#333",
    cursor: "pointer",
  },
}

export default DropdownButton
