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
            tags
            title
            date
            createdAt
          }
        }
      }
    }
  `)

  const tags = {}

  data.allContentfulPost.edges.forEach(edge => {
    const slug = edge.node.slug

    edge.node.tags.forEach(tag => {
      if (tags[tag]) {
        tags[tag].push(edge.node)
      } else {
        tags[tag] = [edge.node]
      }
    })

    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug },
    })
  })

  actions.createPage({
    path: `tags`,
    component: require.resolve(`./src/templates/tags.js`),
    context: { tags },
  })

  Object.entries(tags).forEach(([tag, posts]) => {
    actions.createPage({
      path: `tags/${tag}`,
      component: require.resolve(`./src/templates/tag.js`),
      context: { tag, posts },
    })
  })
}
