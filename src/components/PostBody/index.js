import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import * as Styled from './styled'

const PostBody = ({ title, body, slug, date, tags, showReadMore = false }) => {
  return (
    <div>
      <a href={slug}>
        <Styled.H1>{title}</Styled.H1>
      </a>
      {documentToReactComponents(body)}
      {showReadMore && <Styled.ReadMore href={slug}>Read more</Styled.ReadMore>}
      <Styled.HR />
      <Styled.Footer>
        <ul>
          {tags.map(tag => (
            <li key={tag}>
              &bull;
              <a href={`tags/${tag}`}>{`${tag}`}</a>
            </li>
          ))}
        </ul>
        {new Date(date).toDateString()}
      </Styled.Footer>
    </div>
  )
}

export default PostBody
