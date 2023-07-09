'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import WorkCard from './WorkCard'
import img from '@/assets/Banner.png'
import WorkFollowCard from './WorkFollowCard'
const data = [
  {
    id: '12',
    title: 'Portfolio 1',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    id: '13',
    title: 'Portfolio 2',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    id: '14',
    title: 'Portfolio 3',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    id: '35',
    title: 'Portfolio 4',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    id: '56',
    title: 'Portfolio 5',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    id: '67',
    title: 'Portfolio 6',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
  {
    id: '87',
    title: 'Portfolio 7',
    coverImg: img,
    description:
      'Aqui futuramente tera o link para a taualizacao do meu portfolio. Fiz esse card para testar um componente do meu portfolio e que bom que deu certo.',
    role: 'Program & UI/UX',
    teck: ['Next.js', 'Tailwind'],
  },
]
interface cardType {
  id: string
  title: string
  description: string
  role: string
  teck: string[]
}
export default function Carousel() {
  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [cardProps, setCardProps] = useState<cardType | null>(null)

  useEffect(() => {
    if (!carousel.current) return
    // console.log(carousel.current?.scrollWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  return (
    <>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
        className="w-full cursor-grab overflow-hidden whitespace-nowrap px-2 py-12 "
        style={{
          transform: 'skew(-0.02turn, -5deg)',
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 500, left: -width / 1.2 }}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-24"
        >
          {data.map((work) => (
            <WorkCard
              id={work.id}
              url={'#'}
              giturl={'https://github.com/EyzRyder'}
              coverImg={work.coverImg}
              key={work.title}
              handleMouseEnter={() => setCardProps(work)}
              handleMouseLeave={() => setCardProps(null)}
            />
          ))}
        </motion.div>
      </motion.div>
      {cardProps && (
        <WorkFollowCard
          id={cardProps.id}
          title={cardProps.title}
          descriptions={cardProps.description}
          role={cardProps.role}
          teck={cardProps.teck}
          key={cardProps.title}
        />
      )}
    </>
  )
}
