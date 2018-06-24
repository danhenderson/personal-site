import React from 'react'
import { Root } from './styles'

const PageBlock = ({
  align,
  children,
  justify
}) => (
  <Root align={align} justify={justify}>
    {children}
  </Root>
)

export default PageBlock
