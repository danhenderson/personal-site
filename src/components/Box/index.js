import React from 'react'
import { Root } from './styles'

const Box = ({
  align,
  children,
  spacing,
  width
}) => (
  <Root
    align={align}
    spacing={spacing}
    width={width}>
    {children}
  </Root>
)

Box.defaultProps = {
  align: 'left',
  spacing: 0,
  width: 100
}

export default Box
