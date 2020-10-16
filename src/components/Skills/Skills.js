import React from "react"
import Skill from "./Skill"
import styled from "styled-components"

const Skills = () => {
  return (
    <Wrapper>
      <Skill />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`
export default Skills
