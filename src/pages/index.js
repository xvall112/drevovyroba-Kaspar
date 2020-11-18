import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { SnackbarProvider } from "notistack"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/Skills/Skills"
import Vyrabime from "../components/vyrabime/vyrabime"
import Recenze from "../components/recenze/recenze"

const IndexPage = () => (
  <SnackbarProvider maxSnack={3}>
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
  </SnackbarProvider>
)

const Section = styled.div`
  margin: 6rem 0;
`
export default IndexPage
