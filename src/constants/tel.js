import React from "react"
import { AiTwotonePhone } from "react-icons/ai"

import "./tel.scss"

const tel = () => {
  return (
    <div className="tel">
      <a href="tel:+420605372498">
        <AiTwotonePhone />
      </a>
    </div>
  )
}

export default tel
