import { ReactNode } from 'react'
import { Tilt } from 'react-tilt'

interface WorkCardTiltProps {
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  children: ReactNode
}

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  speed: 1000,
  scale: 1.1,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
}

export default function WorkCardTilt({
  children,
  handleMouseEnter,
  handleMouseLeave,
}: WorkCardTiltProps) {
  return (
    <Tilt
      options={defaultOptions}
      className="tilt grid place-content-center group-hover/card:absolute group-hover/card:z-[2] max-md:hidden md:h-[23rem] md:min-h-[23rem] md:w-[36rem] md:min-w-[36rem]"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {children}
    </Tilt>
  )
}
