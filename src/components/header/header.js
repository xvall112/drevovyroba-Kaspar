import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../../images/logo.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiTwotonePhone } from "react-icons/ai"

import Sidebar from "../header/sidebar"
import SocialIcon from "../../constants/socilaIcon"
import styled from "styled-components"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <Wrapper>
        <HeaderLine />
        <Container>
          <Row>
            <Col xs={4}>
              <HeaderSocialIcon>
                <SocialIcon />
              </HeaderSocialIcon>
            </Col>
            <Col xs={4}>
              <HeaderLogo to="/">
                <img src={logo} alt="logo" />
              </HeaderLogo>
            </Col>
            <Col xs={4}>
              <HeaderMenuIcon>
                <button onClick={toggleSidebar}>
                  <GiHamburgerMenu />
                </button>
              </HeaderMenuIcon>
              <HeaderNavLinks>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Vyrabime</Link>
                  </li>
                  <li>
                    <Link to="/">Kontakt</Link>
                  </li>
                </ul>
              </HeaderNavLinks>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      {isOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </React.Fragment>
  )
}

const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ul {
    display: none;
    padding: 0px;
    margin: 0px;
    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;
      a {
        padding: 10px;
      }
      a:hover {
        color: inherit;
        text-decoration: none;
      }
      li {
        position: relative;
        letter-spacing: 2px;
        font-weight: 500;
        padding: 10px 20px;
        width: 100%;
        margin: 0px;
        transition: all 0.2s ease-in-out;
      }
      li:hover {
        transform: scale(1.3);

        color: var(--clr-primary);
        text-decoration: none;
      }
    }
  }
`
const HeaderSocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const HeaderLogo = styled(Link)`
  display: flex;
  justify-content: center;
  img {
    height: 10vh;
    margin: 0;
  }
`

const HeaderLine = styled.div`
  background-color: var(--clr-third);
  height: 5px;
`

const HeaderMenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  height: 100%;
 
button {
    background: inherit;
    border: 0px;
    margin: 0px;
    padding: 0px;
    color: var(--clr-fourth);
  }

  @media (min-width: 800px) {  
      display: none;
`
const Wrapper = styled.nav`
  position: relative;
  background: transparent;
  z-index: 1;
  height: auto;
  color: var(--clr-fourth);
`
export default Header
