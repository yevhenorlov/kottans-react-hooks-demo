import React, { useState, useEffect } from 'react'
import './Clock.css'

const Clock = props => {
  const [time, setTime] = useState(new Date())
  const [hue, setHue] = useState(generateRandomDegree())
  const [timerId, setTimerId] = useState()
  const [colorTimerId, setColorTimerId] = useState()

  const tick = () => {
    setTime(new Date())
  }

  function generateRandomDegree() {
    return Math.floor(Math.random() * 359)
  }

  useEffect(() => {
    document.title = time.toLocaleTimeString()
  })

  useEffect(() => {
    setTimerId(setInterval(tick, 1000))
    return () => {
      clearInterval(timerId)
    }
  }, [])

  useEffect(() => {
    setColorTimerId(
      setInterval(() => {
        setHue(generateRandomDegree())
      }, 3000)
    )
    return () => {
      clearInterval(colorTimerId)
    }
  }, [])

  return (
    <div
      className="clock__wrapper"
      style={{ backgroundColor: `hsl(${hue}, 100%, 50%` }}
    >
      <p className="clock">{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock
