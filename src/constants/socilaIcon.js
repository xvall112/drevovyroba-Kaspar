import React from "react"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import { AiTwotonePhone } from "react-icons/ai"
import styled from "styled-components"

const data = [
  { id: 1, icon: <FaFacebookSquare />, url: "#" },
  { id: 2, icon: <FaInstagramSquare />, url: "#" },
]
const socilaIcon = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .socialIcon {
    display: flex;
    flex-direction: row;
    list-style: none;
    font-size: 1.3rem;
    margin: 0px;
    text-decoration: none;
    justify-content: center;
    li {
      transition: 0.2s ease-in-out;
    }
    li:hover {
      transform: scale(1.5);
    }
    a {
      margin: 10px;
      color: $fourth-color;
      background-image: none;
      transition: 0.2s ease-in-out;
    }
    a:hover {
      color: var(--clr-primary);
    }
  }
`
export default socilaIcon
