import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.png"
import Container from "react-bootstrap/Container"
import { GiHamburgerMenu } from "react-icons/gi"

import "./header.scss"

const Header = () => (
  <React.Fragment>
    <div className="header__line"></div>
    <Container>
      <div className="header">
        <div className="header__contact">+420605372498</div>
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__menu">
          <GiHamburgerMenu />
        </div>
      </div>
    </Container>
  </React.Fragment>
)

export default Header
