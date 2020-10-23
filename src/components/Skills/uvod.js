import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SmallTitle from "../smallTitle"
import Typed from "react-typed"
import { IoIosArrowForward } from "react-icons/io"
import { graphql, useStaticQuery, Link } from "gatsby"

const query = graphql`
  {
    allContentfulVyrabimeStavime {
      nodes {
        title
      }
    }
  }
`

const Uvod = () => {
  const data = useStaticQuery(query)
  const str = data.allContentfulVyrabimeStavime.nodes.map((item, index) => {
    return item.title
  })

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6}>
            <Intro>
              <SmallTitle text="Zabýváme se" />
              <h1>
                Výrobou a výstavbou veškerých dřevěných konstrukcí a prvků
                tesařského charakteru.
              </h1>
              <h1 className="typed">
                <Typed
                  loop={true}
                  strings={str}
                  typeSpeed={40}
                  backSpeed={50}
                />
              </h1>
            </Intro>
          </Col>

          <Col className="mt-5 pus" md={6}>
            <Row>
              <Col className="pusobime shadow-lg mb-4  text-center" xs={12}>
                <h6>Působíme hlavně v Liberci a okolí do 25 km.</h6>
              </Col>
            </Row>
            <Row className="text-center links">
              <Col xs={4}>
                <Link to="#vyrabime">
                  Vyrabime{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="#">
                  Typove Stavby{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="#kontakt">
                  Kontakt{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 3rem;
  min-height: 80vh;
  @media (min-width: 768px) {
    padding-top: 4rem;
  }
  @media (min-width: 992px) {
    min-height: 60vh;
    padding-top: 5rem;
  }
  @media (min-width: 1200px) {
    min-height: 80vh;
  }
  margin-bottom: 4rem;

  .typed {
    color: var(--clr-primary);
    min-height: 120px;
  }
  .links {
    padding: 20px 0;
    background-color: var(--clr-background);
  }
  a {
    color: var(--clr-primary);
    transition: all 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
      transform: scale(1.3);
    }
  }
  .pus {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
  .pusobime {
    background: var(--clr-gradient);

    border-radius: 10px;
    padding: 20px;
    h6 {
      color: var(--clr-fourth);
    }
  }
`

const Intro = styled.div`
  padding: 10px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.77' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(12.35) translate(-919.03 -689.27)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(12.35) translate(-919.03 -689.27)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(12.35) translate(-919.03 -689.27)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(12.35) translate(-919.03 -689.27)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(12.35) translate(-919.03 -689.27)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(12.35) translate(-919.03 -689.27)'%3E%3Cg fill='%23a1806a'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(12.35) translate(-919.03 -689.27)'%3E%3Cg fill='%23a1806a'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(12.35) translate(-919.03 -689.27)'%3E%3Cg fill='%23a1806a'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`
export default Uvod
