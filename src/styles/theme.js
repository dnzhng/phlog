import styled, { css, createGlobalStyle, ThemeProvider } from 'styled-components'
import 'typeface-vollkorn'
import 'typeface-vollkorn-sc'

export { css, styled, ThemeProvider }

export const theme = {
  colors: {
    black: '#000000',
    background: '#fffffa',
    contrast: '#111',
    contrastLightest: '#dad9d9',
    accent: 'red',
    white: '#ffffff',
  },
}

const reset = () => `
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
}

::selection {
  background-color: ${theme.colors.contrastLightest};
  color: rgba(0, 0, 0, 0.70);
}

a.anchor, a.anchor:hover, a.anchor:link {
  background: none !important;
}

figure {
  a.gatsby-resp-image-link {
    background: none;
  }

  span.gatsby-resp-image-wrapper {
    max-width: 100% !important;
  }
}
`

const styles = () => `
html {
  font-size: 16px;
}

body {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Vollkorn', Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif;
  font-weight: 400;
  background-color: ${theme.colors.background};
  color: ${theme.colors.black};
  max-width: 600px;
  line-height: 2em;
  letter-spacing: 2px;

  @media (min-width: 960px) {
    margin-left: 25%;
  }
}

a {
  color: ${theme.colors.black};
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Vollkorn SC', Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif;
  font-weight: 500;
}
`

export const GlobalStyle = createGlobalStyle`
${reset()}
${styles()}
`
