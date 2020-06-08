import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const NotFoundPage = () => (
  <Layout collapsed={true}>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Not found, sorry :(</p>
  </Layout>
)

export default NotFoundPage
