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
            <Link to="#kontakt">Kontakt</Link>
          </article>
        </Background>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  article {
    width: 100%;

    color: var(--clr-fourth);

    h1 {
      margin-bottom: 30px;
      font-weight: 500;
      color: var(--clr-fourth);
      span {
        color: var(--clr-primary);
        font-size: 4rem;
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
      border-radius: 5px;
    }
    a:hover {
      background-image: linear-gradient(
        to right,
        var(--clr-primary) 0%,
        #d6ae7b 51%,
        var(--clr-primary) 100%
      );
      color: var(--clr-fourth);
      text-decoration: none;
      border: 2px solid var(--clr-primary);
    }
  }
`

export default Hero
