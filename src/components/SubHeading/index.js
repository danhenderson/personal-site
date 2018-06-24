import React from 'react'
import { StyledHeading } from './styles'

const SubHeading = ({
  children,
  spacing
}) => (
  <StyledHeading spacing={spacing}>
    {children}
  </StyledHeading>
)

export default SubHeading
