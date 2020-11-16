import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const query = graphql`
  {
    allContentfulVyrabimeStavime {
      nodes {
        title
        slug
        mainImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const VyrabimeDalsi = () => {
  const data = useStaticQuery(query)

  return (
    <Wrapper>
      <h4>Vyrábíme také</h4>
      <Row>
        <ul className="d-flex overflow-auto">
          {data.allContentfulVyrabimeStavime.nodes.map((item, index) => {
            return (
              <li key={index} className="shadow-sm">
                <Link to={`/vyrabimeStavime/${item.slug}`}>
                  {/* <BackgroundImage
                    Tag="div"
                    fluid={item.mainImage.fluid}
                    className="bcg"
                    preserveStackingContext={true}
                  >
                    <h4>{item.title}</h4>
                  </BackgroundImage> */}
                </Link>
              </li>
            )
          })}
        </ul>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h4 {
    color: var(--clr-primary);
  }
  margin: 2rem 0.2rem;
  @media (min-width: 768px) {
    margin: 4rem 1rem;
  }

  @media (min-width: 1200px) {
    margin: 7rem 2rem;
  }
  ul {
    display: flex;
    align-items: center;
    list-style-type: none !important;
    height: 25vh;
  }

  li {
    min-width: 200px;
    border-radius: 10px;
    height: 20vh;
    margin: 0 10px;
    transition: all 0.2s ease-in-out;
    @media (min-width: 992px) {
      min-width: 300px;
    }
    @media (min-width: 1200px) {
      min-width: 300px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  a {
    height: 100%;
    &:hover {
      color: var(--clr-primary);
    }
  }
  .bcg {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    h4 {
      color: var(--clr-fourth);
      text-align: center;
    }
  }
`
export default VyrabimeDalsi
