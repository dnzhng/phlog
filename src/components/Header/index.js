import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import * as Styled from './styled'

const useScrollPosition = () => {
  if (typeof window === 'undefined') return 0

  // Store the state
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scrollPos, setScrollPos] = useState(window.pageYOffset)

  // On Scroll
  const onScroll = () => {
    setScrollPos(window.pageYOffset)
  }

  // Add and remove the window listener
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return scrollPos
}

const Header = ({ siteTitle, collapsed }) => {
  const scrollPos = useScrollPosition()

  return (
    <Styled.Header collapsed={collapsed} scrollPos={scrollPos}>
      <Styled.H3>
        <Link to="/">{siteTitle}</Link>
      </Styled.H3>
    </Styled.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  collapsed: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  collapsed: false,
}

export default Header
