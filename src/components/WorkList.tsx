'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import img from '@/assets/Banner.png'
const data = [
  {
    title: 'Portfolio 1',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    title: 'Portfolio 2',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    title: 'Portfolio 3',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    title: 'Portfolio 4',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    title: 'Portfolio 5',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
]
export default function WorkList() {
  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (!carousel.current) return
    console.log(carousel.current?.scrollWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: 'grabbing' }}
      className="cursor-grab overflow-hidden px-[5rem] py-12 "
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: width, left: -width }}
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex gap-24"
      >
        {data.map((work) => (
          <ProjectCard
            title={work.title}
            coverImg={work.coverImg}
            descriptions={work.description}
            role={work.role}
            teck={work.teck}
            key={work.title}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
