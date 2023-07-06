'use client'

import { GithubIcon } from 'lucide-react'
import Image from 'next/image'
import img from '@/assets/Banner.png'
import { Tilt } from 'react-tilt'
import { CSSProperties } from 'react'
import useMousePosition from '@/useHook/useMousePosition'

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

export default function ProjectCard() {
  // const follow = useRef<HTMLDivElement>()
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
          <span>Portfolio</span>
          <span>Role:Program & UI/UX</span>
        </div>
        <div className="content">
          <div className="badgeList">
            <span className="badge">Next.js</span>
            <span className="badge">Tailwind</span>
          </div>
          <p>
            Aqui futuramente tera o link para a taualizacao do meu portfolio.
            Fiz esse card para testar um componente do meu portfolio e que bom
            que deu certo.
          </p>
        </div>
      </div>
      <div className="frame">
        <Tilt options={defaultOptions} className="tilt">
          <a href="https://github.com/EyzRyder" className="git">
            <GithubIcon />
          </a>
          <Image src={img} alt="image" className="cover" />
        </Tilt>
        <div className="Wrapper"></div>
      </div>
    </div>
  )
}

/*
      <div
        className="frame"
        onMouseOut={() => {
          if (!follow.current) return
          follow.current.style.display = 'none'
        }}
        onMouseOver={() => {
          if (!follow.current) return
          follow.current.style.display = 'block'
        }}
      >
              <Tilt
          options={defaultOptions}
          style={{ height: '100%', width: '100%' }}
        >
          <a href="https://github.com/EyzRyder" className="git">
            <GithubIcon className="absolute right-6 top-5 hidden" />
          </a>
          <Image src={img} alt="image" className="bannerImg" />
        </Tilt>
*/
