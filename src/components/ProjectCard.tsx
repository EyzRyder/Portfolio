'use client'

import { GithubIcon } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { Tilt } from 'react-tilt'
import { CSSProperties, useEffect, useState } from 'react'
// import useMousePosition from '@/useHook/useMousePosition'

const defaultOptions = {
  reverse: true,
  max: 35,
  perspective: 1000,
  speed: 1000,
  scale: 1.1,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
}

interface WorkProps {
  coverImg: string | StaticImageData
  title: string
  role: string
  teck: string[]
  descriptions: string
}

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

export default function ProjectCard(props: WorkProps) {
  const { x, y } = useMousePosition() as unknown as {
    x: number
    y: number
  }
  const frameStyle: CSSProperties = {
    top: `${y + 70}px`,
    left: `${x + 30}px`,
  }
  return (
    <div className="card">
      <div className="details" style={frameStyle}>
        <div className="head">
          <span>{props.title}</span>
          <span>Role: {props.role}</span>
        </div>
        <div className="content">
          <div className="badgeList">
            {props.teck.map((t: string) => (
              <span className="badge" key={t}>
                {t}
              </span>
            ))}
          </div>
          <p>{props.descriptions}</p>
        </div>
      </div>
      <div className="frame">
        <Tilt options={defaultOptions} className="tilt">
          <a href="https://github.com/EyzRyder" className="git">
            <GithubIcon />
          </a>
          <Image src={props.coverImg} alt="image" className="cover" />
        </Tilt>
        <div className="Wrapper"></div>
      </div>
    </div>
  )
}
