import React from 'react'

import * as Styled from './styled'

const Footer = ({ author }) => {
  return (
    <Styled.Footer>
      © {new Date().getFullYear()}
      {` `}
      <a href={author.url}>{author.name}</a>
    </Styled.Footer>
  )
}

export default Footer
