import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/Skills/Skills"
import Vyrabime from "../components/vyrabime/vyrabime"
import Recenze from "../components/recenze/recenze"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Skills />
    <Section id="vyrabime">
      <Vyrabime />
    </Section>
    <Section>
      <Recenze />
    </Section>
  </Layout>
)

const Section = styled.div`
  margin: 6rem 0;
`
export default IndexPage
