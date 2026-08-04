import { useEffect, useRef, useState } from 'react'

export function useCountUp(end: number, duration = 1800, startWhen = true) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!startWhen || started.current) return
    started.current = true
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(end * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [end, duration, startWhen])

  return value
}
