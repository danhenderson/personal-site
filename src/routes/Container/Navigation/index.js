import React from 'react'
import { Link } from 'react-router-dom'
import { Root, LogoContainer } from './styles'
import Logo from '../../../components/Logo'

const Navigation = ({
  showLogo
}) => (
  <Root showLogo={showLogo}>
    <LogoContainer showLogo={showLogo}>
      <Logo />
    </LogoContainer>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/skills'>Skills</Link>
      </li>
      <li>
        <Link to='/resume'>Resume</Link>
      </li>
    </ul>
  </Root>
)

export default Navigation
