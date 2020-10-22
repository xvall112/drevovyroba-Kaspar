import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

import Tit from "../title"
import SmallTitle from "../smallTitle"

const query = graphql`
  {
    allContentfulRecenze {
      nodes {
        jmeno
        text
      }
    }
  }
`

const Recenze = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const data = useStaticQuery(query)

  return (
    <Wrapper>
      <Container>
        <SmallTitle text="RECENZE" />
        <Tit text="Napsali " span="O nás" />
        <Carousell
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          nextIcon={
            <IoIosArrowForward
              style={{ color: "var(--clr-primary)", fontSize: "50px" }}
            />
          }
          prevIcon={
            <IoIosArrowBack
              style={{ color: "var(--clr-primary)", fontSize: "50px" }}
            />
          }
        >
          {data.allContentfulRecenze.nodes.map((item, index) => {
            return (
              <Carousel.Item key={index} className="text-center">
                <div className="car text-center shadow-lg">
                  <h3>{item.jmeno}</h3>
                  <p className="font-italic">{item.text}</p>
                </div>
              </Carousel.Item>
            )
          })}
        </Carousell>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  background-color: var(--clr-background);
`
const Carousell = styled(Carousel)`
  z-index: 10;
  .carousel-item {
    padding: 100px 0;
    height: 80vh;
    .carousel-control-next-icon {
      color: black;
    }
    @media (min-width: 768px) {
      height: 60vh;
    }
    .car {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 70%;
      @media (min-width: 768px) {
        width: 50%;
      }
    }
  }
`

export default Recenze
