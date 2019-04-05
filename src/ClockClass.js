import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date() }
  }
  tick() {
    this.setState({ time: new Date() })
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div className="clock__wrapper">
        <p className="clock">{this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock
