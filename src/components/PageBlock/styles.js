import styled from 'styled-components'

export const Root = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: ${props => props.theme.getJustification(props.justify)};
  justify-content: ${props => props.theme.getAlignment(props.align)};
  flex-direction: column;
  padding: ${props => props.theme.rhythm([ 7, 1 ])};
`
