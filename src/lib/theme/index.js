/**
* Colors
*/

export const colors = {
  default: {
    background: '#FFFFFF',
    foreground: '#999999',
    border: '#EEEEEE'
  },
  primary: {
    foreground: '#002036'
  },
  secondary: {
    foreground: '#43B7C7',
    border: '#1D9EB0'
  }
}

export const getColor = (theme = 'default', style) => colors[theme][style]
export const getBackground = (theme) => getColor(theme, 'background')
export const getForeground = (theme) => getColor(theme, 'foreground')
export const getBorder = (theme) => getColor(theme, 'border')

/**
* Fonts
*/

export const fonts = {
  heading: {
    font: '"Carter One", Georgia, serif',
    weight: 400,
    spacing: '-0.1rem'
  },
  body: {
    font: 'Montserrat, Verdana, serif',
    weight: 400
  }
}

export const measures = {
  medium: 1.5
}

export const getFont = (style = 'body') => `
  font-family: ${fonts[style].font};
  font-weight: ${fonts[style].weight || 400};
  line-height: ${measures.medium};
  text-transform: ${fonts[style].style || 'none'};
  letter-spacing: ${fonts[style].spacing || 0};
`

export const scale = (exponent = 0, scale = 1.2) => (
  `${Math.pow(scale, exponent)}rem`
)

/**
* Sizing
*/
export const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
  Array.isArray(value)
    ? value.map(v => `${basis * v}${unit}`).join(' ')
    : `${basis * value}${unit}`
)

/**
* Media Queries
*/
export const breakpoints = {
  sm: '30rem',
  md: '40rem',
  lg: '50rem'
}

export const mediaQuery = (breakpoint, query = 'min-width') => (
  `@media (${query}: ${breakpoints[breakpoint]})`
)

/**
* Transitions
*/
export const transitions = {
  ease: 'ease-in-out 250ms'
}

/**
* Helpers
*/
export const getJustification = (justify) => {
  switch (justify) {
    case 'left':
      return 'flex-start'
    case 'right':
      return 'flex-end'
    default:
      return 'center'
  }
}

export const getAlignment = (align) => {
  switch (align) {
    case 'top':
      return 'flex-start'
    case 'bottom':
      return 'flex-end'
    default:
      return 'center'
  }
}
