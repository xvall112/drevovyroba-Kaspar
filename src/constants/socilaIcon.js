import React from "react"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"

import "./socialIcon.scss"

const data = [
  { id: 1, icon: <FaFacebookSquare />, url: "#" },
  { id: 2, icon: <FaInstagramSquare />, url: "#" },
]
const socilaIcon = () => {
  return (
    <div>
      <ul className="socialIcon">
        {data.map(link => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default socilaIcon
