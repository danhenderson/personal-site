import styled from 'styled-components'

export const Root = styled.div`
  padding: ${props => props.theme.rhythm([ 0, 3 ])};
`

export const Line = styled.span`
  position: fixed;
  left: ${props => props.theme.rhythm(1.75)};
  top: ${props => props.theme.rhythm(8)};
  bottom: ${props => props.theme.rhythm(5)};
  width: 1px;
  background-color: ${props => props.theme.getForeground()};
  opacity: 0.5;
`

export const Ball = styled.span`
  position: absolute;
  left: 0;
  top: ${props => props.progress * 100}%;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background-color: ${props => props.theme.getForeground()};
  transform: translateX(-3px);
  transition: ${props => props.theme.transitions.ease};
`

export const StartTitle = styled.div`
  position: fixed;
  top: ${props => props.theme.rhythm(7)};
  left: ${props => props.theme.rhythm(1.75)};
  display: inline-block;
  transform-origin: 0;
  transform: rotate(-90deg);
  opacity: 0.5;
`

export const EndTitle = styled.div`
  position: fixed;
  bottom: ${props => props.theme.rhythm(4)};
  left: ${props => props.theme.rhythm(1.75)};
  display: inline-block;
  transform-origin: 0;
  transform: rotate(90deg);
  opacity: 0.5;
`
