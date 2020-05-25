const dotenv = require('dotenv')

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config()
}

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: `phlog`,
    description: `things you probably don't care about`,
    author: {
      name: 'Dan Zhang',
      url: 'https://dnzhng.com',
      email: 'dan@dnzhng.com',
    },
    social: {
      twitter: 'https://twitter.com/dnzhng',
      instagram: 'https://instagram.com/danzhanginthemoonlight',
      github: 'https://github.com/dnzhng',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `phlog`,
        short_name: `phlog.com`,
        start_url: `/`,
        background_color: `#FFFFFA`,
        theme_color: `#FFFFFA`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://phlog.com`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
