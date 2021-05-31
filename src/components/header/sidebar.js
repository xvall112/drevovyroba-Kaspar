import React, { useRef } from "react"
import { Link } from "gatsby"
import { AiOutlineClose } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import styled from "styled-components"
import { useTransition, useSpring, useChain, animated } from "react-spring"
import logo from "../../images/logo.png"
import links from "../../constants/links"
import socialKontakt from "../../constants/socialKontakt"
import Badge from "@material-ui/core/Badge"

const Sidebar = ({ toggleSidebar }) => {
  const items = links

  const springRef = useRef()
  const transitionRef = useRef()

  const transitions = useTransition(items, item => item.key, {
    ref: transitionRef,
    trail: 400 / items.length,
    from: { transform: "translate3d(0,-50px,0)", opacity: "0" },
    enter: { transform: "translate3d(0,0px,0)", opacity: "1" },
    leave: { transform: "translate3d(0,-50px,0)", opacity: "0" },
  })

  const props = useSpring({
    ref: springRef,
    to: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
      position: "absolute",
      top: "0px",
    },
    from: {
      transform: "translate3d(0,-100vh,0)",
      opacity: 0,
      position: "absolute",
      top: "0px",
    },
  })

  useChain([springRef, transitionRef])
  return (
    <animated.div style={props}>
      <Wrapper>
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
            {transitions.map(({ item, props, key }) => (
              <animated.li key={key} style={props}>
                <Badge badgeContent={item.badge} color="primary">
                  <Link
                    to={item.url}
                    onClick={toggleSidebar}
                    className="text-uppercase"
                  >
                    {item.text}
                  </Link>
                </Badge>
              </animated.li>
            ))}
          </ul>
        </div>

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
      </Wrapper>
    </animated.div>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: var(--clr-secondary);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='759' height='632.5' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.01'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");

  display: flex;
  flex-direction: column;
  align-items: center;
  color: $fourth-color;
  justify-content: space-between;

  .sidebar__logo {
    img {
      height: 15vh;
    }
  }
  .sidebar__contact {
    font-size: 1.2rem;
  }
  .sidebar__closeButton {
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 30px;
    button {
      background: inherit;
      border: 0px;
      margin: 0px;
      padding: 0px;
      color: var(--clr-fourth);
    }
  }
  .sidebar__nav {
    ul {
      list-style: none;
      margin: 0px;
      text-decoration: none;
      text-align: center;
      li {
        margin-bottom: 30px;
        font-size: 20px;
        letter-spacing: 2px;
        a {
          padding: 20px;
          color: var(--clr-fourth);
          background-image: none;
          text-shadow: none;
        }
        a:hover {
          color: var(--clr-primary);
        }
      }
    }
  }
`

const HeaderSocialIcon = styled.div`
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .socialIcons {
    display: flex;
    flex-direction: row;
    justify-content: center;

    a {
      color: black;
      margin: 10px;
    }
    .icon {
      min-width: 50px;
      height: 50px;
      background: var(--clr-fourth);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 22px;
    }
    .icon:hover {
      background: var(--clr-primary);
    }
  }
`
export default Sidebar
