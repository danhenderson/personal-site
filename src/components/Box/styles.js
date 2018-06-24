import styled from 'styled-components'

export const Root = styled.div`
  padding: ${props => props.theme.rhythm(props.spacing)};
  max-width: ${props => props.theme.rhythm(props.width)};
  text-align: ${props => props.align};
`
