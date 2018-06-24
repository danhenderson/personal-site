import React from 'react'
import Heading from '../Heading'
import RichText from '../RichText'
import SubHeading from '../SubHeading'

const ContentBlock = ({
  children,
  subtitle,
  title
}) => (
  <div>
    {title && <Heading>{title}</Heading>}
    {subtitle && <SubHeading spacing={[ 0, 0, 1, 0]}>{subtitle}</SubHeading>}
    {children && <RichText>{children}</RichText>}
  </div>
)

export default ContentBlock
