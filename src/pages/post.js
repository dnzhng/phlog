import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import PostBody from '../components/PostBody'

const Post = ({ data: { contentfulPost } }) => (
  <Layout collapsed={true}>
    <SEO title={contentfulPost.title} />
    <PostBody
      title={contentfulPost.title}
      body={contentfulPost.body.json}
      slug={contentfulPost.slug}
    />
  </Layout>
)

export default Post

export const query = graphql`
  query ContentfulPost($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      body {
        json
      }
    }
  }
`
