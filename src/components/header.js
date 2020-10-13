import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../images/logo.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiTwotonePhone, AiOutlineClose } from "react-icons/ai"

import "./header.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <div className="header__line"></div>
      <Container>
        <Row>
          <Col>
            <div className="header__contact">
              <AiTwotonePhone />
              +420605372498
            </div>
          </Col>
          <Col>
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col>
            <div className="header__menuIcon">
              <button type="button" onClick={openHandler}>
                <GiHamburgerMenu />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      {isOpen && (
        <Container fluid>
          <div className="header__mobileMenu">
            <div className="header__mobileMenu-closeButton">
              <button type="button" onClick={openHandler}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="header__mobileMenu-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="header__mobileMenu-contact">
              <p>
                <AiTwotonePhone />
                +420605372498
              </p>
            </div>
            <div className="header__mobileMenu-nav">nav</div>
            <div className="header__mobileMenu-social">social Icon</div>
          </div>
        </Container>
      )}
    </React.Fragment>
  )
}

export default Header
