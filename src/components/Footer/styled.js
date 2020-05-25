import { styled } from '../../styles/theme'

export const Footer = styled.footer`
  padding: 2rem 0;
  text-align: right;
  color: ${props => props.theme.colors.contrastLightest};

  a {
    color: ${props => props.theme.colors.contrastLightest};
  }
`
