import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import Title from "../title"
import SmallTitle from "../smallTitle"

const query = graphql`
  {
    allContentfulVyrabimeStavime {
      nodes {
        slug
        title
        mainImage {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Vyrabime = () => {
  const data = useStaticQuery(query)

  return (
    <Wrapper>
      <Container>
        <SmallTitle text="DŘEVOVÝROBA" />
        <Title text="Stavíme " span="Vyrábíme " />
        <Col>
          <p className="text-center font-weight-lighter pb-5">
            Zabýváme se výrobou a výstavbou veškerých dřevěných konstrukcí a
            prvků tesařského charakteru.
          </p>
        </Col>
        <Row>
          {data.allContentfulVyrabimeStavime.nodes.map((item, index) => {
            return (
              <Col md={4} className="coll" key={index}>
                <Card>
                  <Link to={`/vyrabimeStavime/${item.slug}`}>
                    <BackgroundImage
                      Tag="div"
                      fluid={item.mainImage.fluid}
                      className="bcg "
                      preserveStackingContext={true}
                    >
                      <h2 className="text-center">{item.title}</h2>
                    </BackgroundImage>
                  </Link>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  margin-top: 4rem;

  .coll {
    border-radius: 5px;
    padding: 0px;
  }
`

const Card = styled.div`
  border-radius: 5px;
  height: 30vh;
  margin: 5px;
  overflow: hidden;

  @media (min-width: 992px) {
    height: 30vh;
  }
  @media (min-width: 1200px) {
    height: 40vh;
  }
  .bcg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);

    height: 100%;
    width: 100%;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.9);
      transform: scale(1.1);
    }
  }
  h2 {
    color: var(--clr-fourth);
  }
  a:hover {
    text-decoration: none;
  }
`
export default Vyrabime
