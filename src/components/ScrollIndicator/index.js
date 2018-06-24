import React from 'react'
import scroll from 'react-scroll'
import { Root } from './styles'

const ScrollIndicator = ({
  direction,
  progress
}) => (
  <Root
    direction={direction}
    onClick={() => {
      const distance = direction === 'up'
        ? window.innerHeight * -1
        : window.innerHeight
      scroll.animateScroll.scrollMore(distance)
    }}
    progress={progress}>
    <svg viewBox='0 0 32 32'>
      <circle
        cx={16}
        cy={16}
        r={15}
        className='root'
      />
      <circle
        cx={16}
        cy={16}
        r={15}
        className='progress'
      />
      <path
        d='M27.414 19.414l-10 10c-0.781 0.781-2.047 0.781-2.828 0l-10-10c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0l6.586 6.586v-19.172c0-1.105 0.895-2 2-2s2 0.895 2 2v19.172l6.586-6.586c0.39-0.39 0.902-0.586 1.414-0.586s1.024 0.195 1.414 0.586c0.781 0.781 0.781 2.047 0 2.828z'
        className='arrow'
      />
    </svg>
  </Root>
)

export default ScrollIndicator
