import React from "react"
import styled from "styled-components"

const SmallTitle = props => {
  return (
    <Wrapper>
      <h6 className="text-uppercase">{props.text}</h6>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h6 {
    color: var(--clr-primary);
    letter-spacing: 10px;
    text-align: center;
    margin-bottom: 2rem;
  }
`
export default SmallTitle
