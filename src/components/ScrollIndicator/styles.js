import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  bottom: ${props => props.theme.rhythm(1)};
  left: 50%;
  transform: translateX(-50%);
  height: ${props => props.theme.rhythm(2)};
  width: ${props => props.theme.rhythm(2)};
  cursor: pointer;

  svg {
    height: ${props => props.theme.rhythm(2)};
    width: ${props => props.theme.rhythm(2)};
  }

  .root {
    fill: ${props => props.theme.getBackground()};
    stroke: ${props => props.theme.getBorder()};
    stroke-width: 2px;
    transition: ${props => props.theme.transitions.ease};
  }

  :hover .root {
    fill: ${props => props.theme.getForeground('secondary')};
    stroke: transparent;
  }

  .progress {
    fill: transparent;
    stroke: ${props => props.theme.getForeground('secondary')};
    stroke-width: 2px;
    stroke-dasharray: 95;
    stroke-dashoffset: ${props => 95 * (1 - props.progress)};
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: ${props => props.theme.transitions.ease};
  }

  :hover .progress {
    stroke: ${props => props.theme.getBorder('secondary')};
  }

  .arrow {
    fill: ${props => props.theme.getBorder()};
    stroke-width: 0;
    transform-origin: 50% 50%;
    transform: scale(0.5) ${props => props.direction === 'up' ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: ${props => props.theme.transitions.ease};
  }

  :hover .arrow {
    stroke: rgba(0,0,0,0.25);
  }
`
