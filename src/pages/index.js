import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import PostBody from '../components/PostBody'

const IndexPage = ({ data }) => (
  <Layout collapsed={false}>
    <SEO title="Home" />
    <div>
      {data.allContentfulPost.edges.map(({ node }) => (
        <PostBody
          key={node.slug}
          title={node.title}
          body={node.excerpt ? node.excerpt.json : node.body.json}
          tags={node.tags}
          slug={node.slug}
          date={node.date || node.createdAt}
          showReadMore={!!node.excerpt}
        />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AllContentfulPosts {
    allContentfulPost {
      edges {
        node {
          title
          date
          tags
          createdAt
          slug
          body {
            json
          }
          excerpt {
            json
          }
        }
      }
    }
  }
`
