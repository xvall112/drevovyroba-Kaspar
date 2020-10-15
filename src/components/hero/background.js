import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import Carousel from "react-bootstrap/Carousel"
import img from "../../images/caroline.png.jpg"
import imgg from "../../images/florian.jpg"

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
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <div className="children">{children}</div>

      <Carousel activeIndex={index} onSelect={handleSelect} fade={true}>
        <Carousel.Item>
          <BackgroundImage
            Tag="div"
            fluid={fluid}
            className="bcg"
            preserveStackingContext={true}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BackgroundImage
            Tag="div"
            fluid={fluid}
            className="bcg"
            preserveStackingContext={true}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .children {
    position: absolute;
    z-index: 50;
    display: flex;
    top: 40%;
    left: 10%;
    right: 10%;
    width: 80%;
    display: block;
    text-align: center;
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
