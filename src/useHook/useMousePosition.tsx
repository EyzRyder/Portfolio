/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react'
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.pageX, y: ev.pageY })
    }
    // window.addEventListener('pointermove', updateMousePosition)
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])
  return mousePosition
}

export default useMousePosition
