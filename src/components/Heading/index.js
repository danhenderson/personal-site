import React from 'react'
import { Root } from './styles'

const Heading = ({
  children,
  spacing
}) => (
  <Root spacing={spacing}>
    {children}
  </Root>
)

Heading.defaultProps = {
  spacing: 0
}

export default Heading
