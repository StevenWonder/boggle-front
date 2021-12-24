import { useEffect, useState } from "react"

const ONE_SECOND = 1
const ONE_SECOND_MS = 1000
const DEFAULT_INITIAL_COUNTDOWN = 180

export const useCounter = (initialCount: number = DEFAULT_INITIAL_COUNTDOWN) => {
    const [count, setCount] = useState(initialCount)
    useEffect(() => {
      if (count !== 0) {
        const id = countdown(count)
        return () => {
          clearTimeout(id)
        }
      }
      return undefined
    }, [count])
  
    const countdown = (c: number) => {
      return setTimeout(() => {
        setCount(c - ONE_SECOND)
      }, ONE_SECOND_MS)
    }
  
    const restartCountdown = () => {
      setCount(initialCount)
    }
  
    return { count, restartCountdown }
}