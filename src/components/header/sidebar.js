import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { AiTwotonePhone, AiOutlineClose } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"

import logo from "../../images/logo.png"
import SocialIcon from "../../constants/socilaIcon"
import Tel from "../../constants/tel"

import "./sidebar.scss"

const Sidebar = ({ toggleSidebar }) => {
  return (
    <aside>
      <Container fluid>
        <div className="sidebar">
          <div className="sidebar__closeButton">
            <button type="button" onClick={toggleSidebar}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="sidebar__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sidebar__nav">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                VYRÁBÍME <IoIosArrowDown />
              </li>
              <li>
                <Link to="">KONTAKT</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar__contact">
            <div className="sidebar__social">
              <SocialIcon />
            </div>
          </div>
        </div>
      </Container>
    </aside>
  )
}

export default Sidebar
