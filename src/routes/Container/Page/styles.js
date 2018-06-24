import styled from 'styled-components'

export const Root = styled.div`
  ${props => props.theme.getFont('body')};
  background-color: ${props => props.theme.getBackground('default')};
  color: ${props => props.theme.getForeground('default')};

  * {
    box-sizing: border-box;
  }
`
