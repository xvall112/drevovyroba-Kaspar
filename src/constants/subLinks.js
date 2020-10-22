import React from "react"

import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    drevostavbyImage: file(relativePath: { eq: "drevostavby.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fasadyImage: file(relativePath: { eq: "fasady.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    garazovaStaniImage: file(relativePath: { eq: "garazovaStani.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    krovyImage: file(relativePath: { eq: "krovy.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pergolyImage: file(relativePath: { eq: "pergoly.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    podlahyImage: file(relativePath: { eq: "podlahy.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const SubLinks = () => {
  const data = useStaticQuery(query)
  const subLinks = [
    {
      page: "vyrabime",
      title: "Pergoly",
      url: `/vyrabime/pergoly`,
      image: data.pergolyImage.childImageSharp.fluid,
    },
    {
      page: "vyrabime",
      title: "Dřevostavby",
      url: `/vyrabime/drevostavby`,
      image: data.drevostavbyImage.childImageSharp.fluid,
    },
    {
      page: "vyrabime",
      title: "Dřevěné fasády",
      url: `/vyrabime/fasady`,
      image: data.fasadyImage.childImageSharp.fluid,
    },
    {
      page: "vyrabime",
      title: "Krovy",
      url: `/vyrabime/krovy`,
      image: data.krovyImage.childImageSharp.fluid,
    },
    {
      page: "vyrabime",
      title: "Garážová stání",
      url: `/vyrabime//garazovaStani`,
      image: data.garazovaStaniImage.childImageSharp.fluid,
    },
    {
      page: "vyrabime",
      title: "Střechy",
      url: `/vyrabime/strechy`,
      image: data.drevostavbyImage.childImageSharp.fluid,
    },
    {
      page: "vyrabime",
      title: "Podlahy",
      url: `/vyrabime/podlahy`,
      image: data.podlahyImage.childImageSharp.fluid,
    },
    {
      page: "vyrabime",
      title: "Typové stavby",
      url: `/vyrabime/typoveStavby`,
      image: data.drevostavbyImage.childImageSharp.fluid,
    },
  ]

  return subLinks
}

export default SubLinks
