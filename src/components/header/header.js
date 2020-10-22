import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../../images/logo.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from "../header/sidebar"
import socialKontakt from "../../constants/socialKontakt"
import styled from "styled-components"
import Links from "../../constants/links"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  /* Jine Transition pro sidebar */
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
                <div className="socialIcons">
                  {socialKontakt.map((item, index) => {
                    return (
                      <a href={item.url} key={index}>
                        <div className="icon">{item.icon}</div>
                      </a>
                    )
                  })}
                </div>
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
                        <Link to={link.url}>{link.text}</Link>
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
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }

  justify-content: center;
  align-items: center;
  height: 100%;
  .socialIcons {
    display: flex;
    flex-direction: row;
    justify-content: center;

    a {
      color: black;
      @media (min-width: 768px) {
        margin: 10px;
      }
      margin: 2px;
    }
    .icon {
      min-width: 30px;
      height: 30px;
      background: var(--clr-fourth);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 15px;
      transition: all 0.2s ease-in-out;
      @media (min-width: 768px) {
        min-width: 40px;
        height: 40px;
        font-size: 22px;
      }
    }
    .icon:hover {
      background-image: linear-gradient(
        to right,
        var(--clr-primary) 0%,
        #d6ae7b 51%,
        var(--clr-primary) 100%
      );
      transform: scale(1.3);
    }
  }
`
const HeaderLogo = styled(Link)`
  display: flex;
  justify-content: center;
  img {
    height: 70px;
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
  background-color: var(--clr-third);
  z-index: 20;
  top: 0px;
  left: 0px;
  right: 0px;

  height: 70px;
  color: var(--clr-fourth);

  @media (min-width: 768px) {
    height: 80px;
  }
  @media (min-width: 992px) {
    height: 80px;
  }
  @media (min-width: 1200px) {
    height: 70px;
  }
`
export default Header
