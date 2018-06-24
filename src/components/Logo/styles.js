import styled from 'styled-components'

export const Root = styled.h6`
  ${props => props.theme.getFont('heading')};
  font-size: ${props => props.theme.scale(3)};
  color: ${props => props.theme.getForeground('primary')};
  transform: scale(1) rotate(0deg);
  transition: ${props => props.theme.transitions.ease};

  :hover {
    transform: scale(1.1) rotate(-5deg);
  }
`
