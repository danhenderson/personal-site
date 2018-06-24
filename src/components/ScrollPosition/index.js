import { Component } from 'react'
import ReactDOM from 'react-dom'
import throttle from 'lodash/throttle'

class ScrollPosition extends Component {
  constructor () {
    super()
    this.calculatePosition = throttle(this.calculatePosition.bind(this), 125)
    this.state = {
      position: 0,
      progress: 0,
      direction: 'none'
    }
  }

  componentDidMount () {
    this.element = ReactDOM.findDOMNode(this)
    window.addEventListener('scroll', this.calculatePosition)
    window.addEventListener('resize', this.calculatePosition)
    this.calculatePosition()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.calculatePosition)
    window.removeEventListener('resize', this.calculatePosition)
  }

  calculatePosition () {
    const position = window.pageYOffset
    const documentHeight = window.document.body.scrollHeight
    const viewportHeight = window.innerHeight
    const progress = position / (documentHeight - viewportHeight)
    const direction = this.getScrollDirection(position, this.state.position, progress)

    this.setState({
      position,
      progress,
      direction
    })
  }

  getScrollDirection (newPos, oldPos, progress) {
    if (progress === 0) return 'down'
    if (progress === 1) return 'up'
    if (newPos > oldPos) return 'down'
    if (newPos < oldPos) return 'up'
    return 'none'
  }

  render () {
    return this.props.children(this.state)
  }
}

export default ScrollPosition
