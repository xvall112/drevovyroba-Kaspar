import React from "react"
import Background from "./background"
import styled from "styled-components"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <div>
      <Wrapper>
        <Background>
          <article>
            <h1>
              Dřevovýroba <span>Kašpar</span>
            </h1>
            <Link to="/kontakt">Kontakt</Link>
          </article>
        </Background>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-fourth);
    text-align: center;
    h1 {
      margin-bottom: 30px;
      font-weight: 500;
      color: var(--clr-fourth);
      span {
        color: var(--clr-primary);
      }
    }
    a {
      background: transparent;
      border: 2px solid var(--clr-fourth);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-fourth);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      background: var(--clr-primary);
      color: var(--clr-fourth);
      text-decoration: none;
      border: 2px solid var(--clr-primary);
    }
  }
`

export default Hero