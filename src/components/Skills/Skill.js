import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { MdDone, MdAttachMoney } from "react-icons/md"
import { FaHandshake } from "react-icons/fa"

const data = [
  {
    icon: <MdDone />,
    title: "Kvalitní práce",
    text:
      " Pracujeme s kvalitním dřevem dle požadavků zákazníka. Materiál, se kterým pracujeme přizpůsobujeme konkrétním produktům.",
  },
  {
    icon: <FaHandshake />,
    title: "Osobní přístup",
    text:
      " Pracujeme s kvalitním dřevem dle požadavků zákazníka. Materiál, se kterým pracujeme přizpůsobujeme konkrétním produktům.",
  },
  {
    icon: <MdAttachMoney />,
    title: "Cena v závislosti na práci",
    text:
      " Cena je závislá na kvalitě materiálu a rozsahu práce. Její výše je se zákazníky projednávána osobně.",
  },
]
const Skill = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          {data.map((item, index) => {
            return (
              <Col md={4} key={index}>
                <div className="skills__icon">{item.icon}</div>

                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .skills__icon {
    background-color: var(--clr-secondary);
    font-size: 2rem;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    display: inline-block;
    color: var(--clr-primary);
  }
`
export default Skill
