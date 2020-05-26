import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import PostBody from '../components/PostBody'

const IndexPage = ({ data }) => (
  <Layout collapsed={false}>
    <SEO title="Home" />
    <div>
      {data.allContentfulPost.edges.map(({ node, index }) => (
        <PostBody
          key={index}
          title={node.title}
          body={node.body.json}
          slug={node.slug}
          date={node.date || node.createdAt}
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
          createdAt
          slug
          body {
            json
          }
        }
      }
    }
  }
`
