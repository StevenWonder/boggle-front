import { useEffect, useState } from "react"

const ONE_SECOND = 1
const ONE_SECOND_MS = 1000
const DEFAULT_INITIAL_COUNTDOWN = 180

let id : ReturnType<typeof setInterval> = undefined

export const useCounter = (initialCount: number = DEFAULT_INITIAL_COUNTDOWN) => {
    const [count, setCount] = useState(initialCount)
    const [active, setActive] = useState(false)

    useEffect(() => {
      if (count === 0) {
        clearInterval(id)
        setActive(false)
      }
    }, [count])

    useEffect(() => {
      if (count !== 0 && active === false) {
        setActive(true)
        id = newCountdown()
      }
    }, [count, active])
  
    const newCountdown = () => {
      return setInterval(() => {
        setCount((c) => c - ONE_SECOND)
      }, ONE_SECOND_MS)
    }
  
    const restartCountdown = (val: number = initialCount) => {
      setCount(val)
    }
  
    return { count, restartCountdown }
}