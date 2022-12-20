import { VscTriangleUp } from "react-icons/vsc"
import { useState } from "react"
const Table = ({ data, config, keyFn }) => {
  const [score, setScore] = useState(data)
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {config.map((label) => {
            return <th key={label.label}>{label.label}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, index) => {
          return (
            <tr key={keyFn(rowData)} className="border-b">
              {config.map((label) => {
                return (
                  <td key={label.label} className="p-2">
                    {label.render(rowData)}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
