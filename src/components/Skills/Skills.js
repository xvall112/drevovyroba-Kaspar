import React from "react"
import Skill from "./Skill"
import styled from "styled-components"
/* import Zkusenosti from "./Zkusenosti" */
import Uvod from "./uvod"

const Skills = () => {
  return (
    <Wrapper>
      <Uvod />

      <Skill />
      {/* <Zkusenosti /> */}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export default Skills
