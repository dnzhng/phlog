import { styled } from '../../styles/theme'

export const Header = styled.header`
  margin-top: 5rem;

  @media (min-width: 960px) {
    margin-bottom: 2rem;
    width: 450px;
    transition: all 0.2s ease-out;
    text-align: right;
    position: fixed;
    margin-top: -4rem;
    border-right: 1px solid;
    border-color: rgba(0, 0, 0, 0);

    ${props =>
      (props.collapsed || props.scrollPos > 10) &&
      `
      margin-left: -190px;
      line-height: 1;
      margin-top: 0;
      width: 170px;
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
