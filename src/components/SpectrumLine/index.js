import React from 'react'
import { Root, EndTitle, StartTitle, Line, Ball } from './styles'
import SubHeading from '../SubHeading'

const SpectrumLine = ({
  children,
  endTitle,
  progress,
  startTitle
}) => (
  <Root>
    <StartTitle>
      <SubHeading>{startTitle}</SubHeading>
    </StartTitle>
    <Line>
      <Ball progress={progress} />
    </Line>
    <div>
      {children}
    </div>
    <EndTitle>
      <SubHeading>{endTitle}</SubHeading>
    </EndTitle>
  </Root>
)

export default SpectrumLine
