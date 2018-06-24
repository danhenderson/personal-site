import styled from 'styled-components'

export const Root = styled.h3`
  padding: ${props => props.theme.rhythm(props.spacing)};
  ${props => props.theme.getFont('heading')};
  font-size: ${props => props.theme.scale(5)};
  color: ${props => props.theme.getForeground('primary')};
`
