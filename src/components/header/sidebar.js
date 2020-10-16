import React, { useRef } from "react"
import { Link } from "gatsby"
import { AiOutlineClose } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import styled from "styled-components"
import { useTransition, useSpring, useChain, animated } from "react-spring"
import logo from "../../images/logo.png"
import SocialIcon from "../../constants/socilaIcon"
import links from "../../constants/links"

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
                <Link to={item.url} onClick={toggleSidebar}>
                  {item.text}
                </Link>
              </animated.li>
            ))}
          </ul>
        </div>
        <div className="sidebar__contact">
          <div className="sidebar__social">
            <SocialIcon />
          </div>
        </div>
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
export default Sidebar
