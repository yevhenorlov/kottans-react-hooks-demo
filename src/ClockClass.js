import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date(), hue: null }
  }
  tick() {
    this.setState({ time: new Date() })
  }

  generateRandomHue() {
    const hue = Math.floor(Math.random() * 255)
    this.setState({ hue })
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
    this.colorTimerId = setInterval(() => {
      this.generateRandomHue()
    }, 3000)
  }

  componentDidUpdate() {
    console.log({
      'current time': this.state.time.toLocaleTimeString(),
      'current hue': this.state.hue
    })
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
