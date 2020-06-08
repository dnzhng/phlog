import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { styled } from '../styles/theme'

const StyledH2 = styled.h2`
  margin-top: 0;
`

const StyledP = styled.p`
  margin-bottom: 0;
`

const Tag = ({ pageContext: { tag, posts } }) => (
  <Layout collapsed={true}>
    <SEO title={`tagged: ${tag}`} />
    <h1>{`${posts.length} posts tagged: ${tag}`}</h1>
    {posts.map(post => (
      <a key={post.slug} href={`/${post.slug}`}>
        <StyledP>{new Date(post.date || post.createdAt).toDateString()}</StyledP>
        <StyledH2>{post.title}</StyledH2>
      </a>
    ))}
  </Layout>
)

export default Tag
