import { styled } from '../../styles/theme'

export const H1 = styled.h1`
  margin: 0px;
  margin-bottom: 30px;
  padding-top: 20px;
`

export const HR = styled.hr`
  background-color: ${props => props.theme.colors.contrastLightest};
  color: ${props => props.theme.colors.contrastLightest};
  height: 1px;
  border: none;
`

export const ReadMore = styled.a`
  text-decoration: underline;
  font-size: 0.9em;
`

export const Footer = styled.div`
  color: ${props => props.theme.colors.contrastLightest};
  font-size: 0.75em;
  text-align: right;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${props => props.theme.colors.contrastLightest};
  }

  ul {
    padding-left: 0;
    margin: 0;
  }

  li {
    display: inline;
    margin-right: 5px;
  }
`
