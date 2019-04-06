import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date(), hue: this.generateRandomDegree() }
  }
  tick() {
    this.setState({ time: new Date() })
  }

  generateRandomDegree() {
    return Math.floor(Math.random() * 359)
  }

  componentDidMount() {
    document.title = this.state.time.toLocaleTimeString()

    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)

    this.colorTimerId = setInterval(() => {
      this.setState({ hue: this.generateRandomDegree() })
    }, 3000)
  }

  componentDidUpdate() {
    document.title = this.state.time.toLocaleTimeString()
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
    clearInterval(this.colorTimerId)
  }

  render() {
    return (
      <div
        className="clock__wrapper"
        style={{ backgroundColor: `hsl(${this.state.hue}, 100%, 50%` }}
      >
        <p className="clock">{this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock
