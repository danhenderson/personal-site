import styled from 'styled-components'

export const Root = styled.nav`
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.theme.rhythm(3)};
  background-color: ${props => props.theme.getBackground()};

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${props => props.showLogo ? props.theme.getBorder() : 'transparent'};
    transition: ${props => props.theme.transitions.ease};
  }

  ul {
    position: absolute;
    right: ${props => props.showLogo ? props.theme.rhythm(1) : '50%'};
    top: 50%;
    transform: translateY(-50%) ${props => props.showLogo ? '' : 'translateX(50%)'};
    transition: ${props => props.theme.transitions.ease};
    white-space: nowrap;
  }

  li {
    display: inline-block;
    margin: ${props => props.theme.rhythm(0.25)};

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.getForeground()};
  }
`

export const LogoContainer = styled.div`
  position: absolute;
  left: ${props => props.theme.rhythm(1)};
  top: 50%;
  transform: ${props => props.showLogo ? 'translateY(-50%)' : 'translateY(-20rem)'};
  transition: ${props => props.theme.transitions.ease};
`
