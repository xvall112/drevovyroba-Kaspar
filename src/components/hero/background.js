import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel"

const query = graphql`
  {
    contentfulHeroImage {
      heroImages {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Background = ({ children }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const data = useStaticQuery(query)

  return (
    <Wrapper>
      <div className="children">{children}</div>

      <Carousel activeIndex={index} onSelect={handleSelect} fade={true}>
        {data.contentfulHeroImage.heroImages.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <BackgroundImage
                Tag="div"
                fluid={item.fluid}
                className="bcg"
                preserveStackingContext={true}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .children {
    position: absolute;
    z-index: 2;
    display: flex;
    top: 30%;
    left: 10%;
    right: 10%;
    width: 80%;
    display: block;
    text-align: center;
    @media (min-width: 600px) {
      top: 40%;
    }
  }
  .carousel {
    .carousel-item {
      height: 100vh;
      img {
        min-height: 100vh;
      }
    }
  }
  .bcg {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  }
`
export default Background
