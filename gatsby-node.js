/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allContentfulPost.edges.forEach(edge => {
    const slug = edge.node.slug;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/pages/post.js`),
      context: { slug }
    })
  })
}
