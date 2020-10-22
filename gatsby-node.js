const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //create page for Stavime
  const stavimeTemplate = path.resolve("./src/templates/stavime.js")
  const res = await graphql(`
    query MyQuery {
      allContentfulVyrabimeStavime {
        nodes {
          slug
        }
      }
    }
  `)
  res.data.allContentfulVyrabimeStavime.nodes.forEach(node => {
    createPage({
      component: stavimeTemplate,
      path: `/vyrabimeStavime/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
