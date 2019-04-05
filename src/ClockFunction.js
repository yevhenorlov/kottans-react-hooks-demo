import React, { useState, useEffect } from 'react'
import './Clock.css'

const Clock = props => {
  const [time, setTime] = useState(new Date())
  const [hue, setHue] = useState(generateRandom8Bit())
  const [timerId, setTimerId] = useState()
  const [colorTimerId, setColorTimerId] = useState()

  const tick = () => {
    setTime(new Date())
  }

  function generateRandom8Bit() {
    return Math.floor(Math.random() * 256)
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
        setHue(generateRandom8Bit())
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
