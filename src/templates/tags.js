import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { styled } from '../styles/theme'

const StyledLi = styled.li`
  text-transform: capitalize;
`

const Tags = ({ pageContext: { tags } }) => (
  <Layout collapsed={true}>
    <SEO title="tags" />
    <h1>Tags</h1>
    <ul>
      {tags.map(([tag, posts]) => (
        <a key={tag} href={`tags/${tag}`}>
          <StyledLi>{`${tag} (${posts.length})`}</StyledLi>
        </a>
      ))}
    </ul>
  </Layout>
)

export default Tags
