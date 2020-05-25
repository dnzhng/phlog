/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import Footer from '../Footer'
import { GlobalStyle, ThemeProvider, theme } from '../../styles/theme'
import * as Styled from './styled'

const Layout = ({ children, collapsed }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          description
          author {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.description}
          collapsed={collapsed}
        />
        <Styled.Body collapsed={collapsed}>
          <main>{children}</main>
        </Styled.Body>
        <Footer author={data.site.siteMetadata.author} />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool,
}

Layout.defaultProps = {
  collapsed: false,
}

export default Layout
