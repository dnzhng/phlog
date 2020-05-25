import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import * as Styled from './styled'

const PostBody = ({ title, body, slug }) => {
  return (
    <div>
      <a href={slug}>
        <Styled.H1>{title}</Styled.H1>
      </a>
      {documentToReactComponents(body)}
    </div>
  )
}

export default PostBody
