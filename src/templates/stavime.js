import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Fotogalerie from "../components/vyrabime/fotogalerie"

import VyrabimeDalsi from "../components/vyrabime/vyrabimeDalsi"

export const query = graphql`
  query($slug: String!) {
    contentfulVyrabimeStavime(slug: { eq: $slug }) {
      title
      slug
      mainImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      text {
        json
      }
    }

    file(relativePath: { eq: "caroline.png.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Stavime = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["cs-CZ"]
        const url = node.data.target.fields.file["cs-CZ"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  const {
    title,
    text,
    images,
    mainImage: { fluid },
  } = props.data.contentfulVyrabimeStavime
  return (
    <Layout>
      <SEO title={title} />
      <Wrapper>
        <div className="header shadow-lg">
          <BackgroundImage
            Tag="div"
            fluid={props.data.file.childImageSharp.fluid}
            className="bc"
            preserveStackingContext={true}
          >
            <h1 className="text-uppercase text-center">{title}</h1>
          </BackgroundImage>
        </div>
        <div className="section-text">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col md={6} className="pb-5">
                <Img className="image" fluid={fluid} />
              </Col>
              <Col md={6}>{documentToReactComponents(text.json, options)}</Col>
            </Row>
            <Row className="justify-content-center">
              {images && (
                <Col xs={12} md={8}>
                  <Fotogalerie img={images} />
                </Col>
              )}
            </Row>
          </Container>
          <VyrabimeDalsi />
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  ul {
    list-style-type: circle;
  }
  padding-top: 60px;
  min-height: 100vh;
  .section-text {
    padding-top: 5vh;
  }
  .image {
    height: 40vh;
  }
  .header {
    height: 30vh;
  }

  .bc {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    h1 {
      color: var(--clr-fourth);
    }
  }
`
export default Stavime
