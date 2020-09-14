import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const AboutPage = ({ data: { contentfulAboutPage } }) => (
  <Layout collapsed={true}>
    <SEO title="About" />
    <h1>{contentfulAboutPage.title}</h1>
    {documentToReactComponents(contentfulAboutPage.body.json)}
  </Layout>
)

export default AboutPage

export const query = graphql`
  query ContentfulAboutPage {
    contentfulAboutPage {
      title
      body {
        json
      }
    }
  }
`
