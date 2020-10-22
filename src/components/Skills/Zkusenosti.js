import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CountUp from "react-countup"

const data = [
  {
    title: 100,
    text: " dokončených projektů",
  },
  {
    title: 10,
    text: " let zkušeností",
  },
  {
    title: 100,
    text: "% spokojených zákazníků",
  },
]
const Zkusenosti = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row className="roww">
            {data.map((item, index) => {
              return (
                <Col md={4} key={index} className="coll shadow-lg py-3">
                  <h5>
                    <CountUp end={item.title} duration={4} />
                  </h5>

                  <h6>{item.text}</h6>
                </Col>
              )
            })}
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,224L1440,320L1440,320L0,320Z"
          ></path>
        </svg>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23ffffff' cx='50' cy='0' r='50'/%3E%3Cg fill='%23fbfafa' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f7f5f4' cx='50' cy='100' r='50'/%3E%3Cg fill='%23f3f0ef' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23efebe9' cx='50' cy='200' r='50'/%3E%3Cg fill='%23ebe6e3' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e7e1dd' cx='50' cy='300' r='50'/%3E%3Cg fill='%23e3dbd7' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ded5d1' cx='50' cy='400' r='50'/%3E%3Cg fill='%23dad0ca' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d5cac3' cx='50' cy='500' r='50'/%3E%3Cg fill='%23d1c4bc' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ccbdb5' cx='50' cy='600' r='50'/%3E%3Cg fill='%23c7b7ad' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c2b0a5' cx='50' cy='700' r='50'/%3E%3Cg fill='%23bda99d' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b8a294' cx='50' cy='800' r='50'/%3E%3Cg fill='%23b29a8b' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ad9281' cx='50' cy='900' r='50'/%3E%3Cg fill='%23a78976' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a1806a' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");

  background-size: contain;

  .coll {
    text-align: center;
    width: 100%;
    margin-top: 1rem;
    range: 0;
  }
  .roww {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
  }
  h5 {
    color: var(--clr-secondary);
    font-size: 5rem;
  }
`
export default Zkusenosti
