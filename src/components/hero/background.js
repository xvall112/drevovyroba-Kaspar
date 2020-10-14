import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

const query = graphql`
  {
    file(relativePath: { eq: "florian.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = ({ children }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <div>
      <Wrapper>
        <BackgroundImage
          Tag="div"
          fluid={fluid}
          className="bcg"
          preserveStackingContext={true}
        >
          {children}
        </BackgroundImage>
      </Wrapper>
    </div>
  )
}

const fadeIn = keyframes`
from{
    background-color: rgb(255,255,255,0.2)
}
to{
    background-color: rgb(0,0,0,0.4)
}`
const Wrapper = styled.section`
  .bcg {
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }
`
export default Background
