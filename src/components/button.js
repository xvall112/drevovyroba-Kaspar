import React from "react"
import styled from "styled-components"

const Button = props => {
  return (
    <Wrapper>
      <button className="btn-grad">{props.text}</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .btn-grad {
    background-image: linear-gradient(
      to right,
      #eacda3 0%,
      #d6ae7b 51%,
      #eacda3 100%
    );
  }
  .btn-grad {
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
  }

  .btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`
export default Button
