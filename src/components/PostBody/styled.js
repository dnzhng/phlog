import { styled } from '../../styles/theme'

export const H1 = styled.h1`
  margin: 0px;
`

export const HR = styled.hr`
  background-color: ${props => props.theme.colors.contrastLightest};
  color: ${props => props.theme.colors.contrastLightest};
  height: 1px;
  border: none;
`

export const Footer = styled.div`
  color: ${props => props.theme.colors.contrastLightest};
  font-size: 0.75em;
  text-align: right;
  margin-bottom: 3rem;
`
