import { useEffect, useState } from 'react'

const useWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0)
  const handleResize = () => setScreenWidth(window.innerWidth)
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return screenWidth
}

export default useWidth
