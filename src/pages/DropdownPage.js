import Dropdown from "../components/Dropdown"
import { useState } from "react"

const DropdownPage = () => {
  const options = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
  ]
  const [selection, setSelection] = useState(null)
  const handleSelect = (option) => {
    setSelection(option)
  }
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  )
}

export default DropdownPage
