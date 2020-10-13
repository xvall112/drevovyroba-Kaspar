import React from "react"
import { AiTwotonePhone } from "react-icons/ai"

import "./tel.scss"

const tel = () => {
  return (
    <div className="tel">
      <AiTwotonePhone />
      <a href="tel:+420605372498">+420605372498</a>
    </div>
  )
}

export default tel
