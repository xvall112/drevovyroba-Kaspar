require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Dřevovýroba Kašpar`,
    description: `Zabýváme se výrobou a výstavbou veškerých dřevěných konstrukcí a prvků tesařského charakteru v okolí Liberce.`,
    author: `@kaspar`,
    siteURL: "drevovyrobakaspar.cz",
    image: "/src/images/logo.png",
    lang: "cs",
    keywords: [
      "pergoly",
      "dřevostavby",
      "krovy",
      "dřevěné fasády",
      "střechy",
      "garážová stání",
      "Liberec",
      "drevostavby",
      "drevovyroba",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `y8jmdpyv8csl`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:
          /* process.env.CONTENTFUL_ACCESS_TOKEN */ "8AmGwZy3ruiq3NxVd9WCg0NiatcQYvfOYjjrhlP67fU",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dřevovýroba Kašpar`,
        short_name: `Kašpar`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
