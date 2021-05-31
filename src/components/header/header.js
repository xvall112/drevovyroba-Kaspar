import { Link } from "gatsby"
import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from "../../images/logo.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from "../header/sidebar"
import socialKontakt from "../../constants/socialKontakt"
import styled from "styled-components"
import Links from "../../constants/links"
import { AppBar, Toolbar, Grid, Box } from "@material-ui/core"
import { AiOutlinePhone } from "react-icons/ai"
import Badge from "@material-ui/core/Badge"

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
        <StyledAppBar>
          <Toolbar>
            <Container>
              <Row>
                <Col xs={4} md={5}>
                  <HeaderPhone>
                    <div className="socialIcons">
                      <a href="tel:+420605372498">
                        <div className="icon">
                          <AiOutlinePhone />
                        </div>
                      </a>
                    </div>
                  </HeaderPhone>
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
                <Col xs={4} md={2}>
                  <HeaderLogo to="/">
                    <img src={logo} alt="logo" />
                  </HeaderLogo>
                </Col>
                <Col xs={4} md={5}>
                  <HeaderMenuIcon>
                    <button onClick={toggleSidebar}>
                      <GiHamburgerMenu />
                    </button>
                  </HeaderMenuIcon>
                  <HeaderLink>
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      {Links.map(link => {
                        return (
                          <Grid item key={link.key}>
                            <Badge badgeContent={link.badge} color="primary">
                              <Styledbox
                                pl={4}
                                onClick={() => scrollTo(link.url)}
                              >
                                {link.text}
                              </Styledbox>
                            </Badge>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </HeaderLink>
                </Col>
              </Row>
            </Container>

            {isOpen && <Sidebar toggleSidebar={toggleSidebar} />}
          </Toolbar>
        </StyledAppBar>
      </Wrapper>
    </>
  )
}

const StyledAppBar = styled(AppBar)`
  background-color: var(--clr-third) !important;
`
const Styledbox = styled(Box)`
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--clr-primary);
    cursor: pointer;
    transform: scale(1.1);
  }
`
const HeaderLink = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: grid;
  }

  align-items: center;
  justify-content: flex-end;
  font-size: "18px";
  height: 100%;
  width: 100%;
  text-transform: uppercase;
`

const HeaderPhone = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
  justify-content: start;
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
      min-width: 35px;
      height: 35px;
      background: var(--clr-fourth);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 20px;
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
const HeaderSocialIcon = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }

  justify-content: start;
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

const HeaderMenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  }
`
const Wrapper = styled.nav``

export default Header
