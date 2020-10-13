import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../../images/logo.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiTwotonePhone } from "react-icons/ai"

import Sidebar from "../header/sidebar"
import Tel from "../../constants/tel"

import "./header.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <div className="header__line"></div>
      <Container>
        <Row>
          <Col xs={4}>
            <div className="header__contact">
              <Tel />
            </div>
          </Col>
          <Col xs={4}>
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col xs={4}>
            <div className="header__menuIcon">
              <button type="button" onClick={toggleSidebar}>
                <GiHamburgerMenu />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      {isOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </React.Fragment>
  )
}

export default Header
