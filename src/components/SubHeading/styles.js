import styled from 'styled-components'

export const StyledHeading = styled.h6`
  padding: ${props => props.theme.rhythm(props.spacing)};
  font-size: ${props => props.theme.scale(-1)};
`
