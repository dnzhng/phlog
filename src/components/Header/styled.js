import { styled } from '../../styles/theme'

export const Header = styled.header`
  margin-top: 5rem;

  @media (min-width: 960px) {
    margin-bottom: 2rem;
    width: 590px;
    transition: all 0.2s ease-out;
    text-align: right;
    position: fixed;
    margin-top: -6rem;
    margin-left: -50px;
    border-right: 1px solid;
    border-color: rgba(0, 0, 0, 0);

    ${props =>
      (props.collapsed || props.scrollPos > 10) &&
      `
      margin-left: -220px;
      line-height: 1;
      margin-top: 0;
      width: 200px;
      padding: 20px;
      border-color: rgba(0, 0, 0, 0.7);
      transition: all 0.2s ease-out;
    `}
  }

  a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
  }
`

export const H3 = styled.h3`
  margin: 0;
`

export const Nav = styled.ul`
  list-style-type: none;
  text-align: left;
  margin-top: 0px;
  padding-left: 0px;

  @media (min-width: 960px) {
    padding-left: 50px;

    ${props =>
      (props.collapsed || props.scrollPos > 10) &&
      `
      margin-top: 1em;
      text-align: right;
    `}
  }

  li {
    display: inline;
    font-size: 0.8em;
    margin-right: 10px;
    margin-bottom: 5px;
    font-style: italic;
    transition: color 0.2s ease-out;

    @media (min-width: 960px) {
      ${props =>
        (props.collapsed || props.scrollPos > 10) &&
        `
        display: block;
        margin-right: 0px;
      `}
    }
  }

  a {
    color: ${props => props.theme.colors.contrastMedium};

    &:hover {
      transition: color 0.2s ease-out;
      color: ${props => props.theme.colors.black};
    }
  }
`

