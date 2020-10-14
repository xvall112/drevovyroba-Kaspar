import React from "react"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import { AiTwotonePhone } from "react-icons/ai"

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
        <li>
          <a href="tel:+420605372498">
            <AiTwotonePhone />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default socilaIcon
