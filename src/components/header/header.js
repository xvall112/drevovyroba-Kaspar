import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../../images/logo.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from "../header/sidebar"
import SocialIcon from "../../constants/socilaIcon"
import styled from "styled-components"
import Links from "../../constants/links"
import SubLinks from "./subLinks"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [subLinkOpen, setSubLinkOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleSubLinks = () => {
    setSubLinkOpen(true)
  }

  const toggleSubLinksClose = () => {
    setSubLinkOpen(false)
  }

  /* const transitions = useTransition(isOpen, null, {
    from: {
      transform: "translate3d(0,-100vh,0)",
      opacity: 0,
      position: "absolute",
      top: "0px",
    },
    enter: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
      position: "absolute",
      top: "0px",
    },
    leave: {
      transform: "translate3d(0,-100vh,0)",
      opacity: 0,
      position: "absolute",
      top: "0px",
    },
  }) */
  return (
    <>
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
                  {Links.map(link => {
                    return (
                      <li key={link.key}>
                        <Link
                          to={link.url}
                          onMouseEnter={toggleSubLinks}
                          onMouseLeave={toggleSubLinksClose}
                        >
                          {link.text}
                        </Link>
                        {/*  {link.subLinks &&
                          link.subLinks.map((subLink, index) => {
                            return (
                              <li key={index}>
                                <Link to={subLink.url}>{subLink.text}</Link>
                              </li>
                            )
                          })} */}
                      </li>
                    )
                  })}
                </ul>
              </HeaderNavLinks>
            </Col>
          </Row>
        </Container>

        {isOpen && <Sidebar toggleSidebar={toggleSidebar} />}
        {subLinkOpen && <SubLinks />}
      </Wrapper>
    </>
  )
}

const HeaderNavLinks = styled.div`
  position: relative;
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
    display: flex;
    justify-content: center;
  }

  @media (min-width: 800px) {  
      display: none;
`
const Wrapper = styled.nav`
  position: fixed;
  z-index: 20;
  top: 0px;
  left: 0px;
  right: 0px;
  background: transparent;
  height: auto;
  color: var(--clr-fourth);
`
export default Header
