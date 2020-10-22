import React from "react"
import styled from "styled-components"

const Title = props => {
  return (
    <Wrapper>
      <h2>
        {props.text}
        <span>{props.span}</span>
      </h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
  h2 {
    letter-spacing: 3px;
    text-align: center;
    color: black;
    span {
      border-radius: 10px;
      padding: 5px 20px;
      background: var(--clr-gradient);
      color: var(--clr-fourth);
    }
  }
`
export default Title
