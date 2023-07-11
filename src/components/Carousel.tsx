'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpLeftFromCircle, GithubIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import img from '@/assets/Banner.png'
import { WorkCard } from './WorkCard/index'
import WorkFollowCard from './WorkFollowCard'
import useWidth from '@/useHook/useScreenWidth'
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
  const [carouselWidth, setCarouselWidth] = useState(0)
  const fullWidth = useWidth()
  const [cardProps, setCardProps] = useState<cardType | null>(null)

  useEffect(() => {
    console.log(fullWidth)
    if (!carousel.current) return
    // console.log(carousel.current?.scrollWidth)
    setCarouselWidth(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth,
    )
  }, [fullWidth])
  return (
    <>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
        className="w-full cursor-grab overflow-hidden whitespace-nowrap px-2 py-12 max-md:overflow-y-scroll  md:-skew-x-[0.02turn] md:-skew-y-6"
      >
        <motion.div
          drag={fullWidth > 768 ? 'x' : false}
          dragConstraints={{ right: 500, left: -carouselWidth / 1.2 }}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-24 max-md:flex-col max-md:items-center max-md:gap-10 max-[325px]:gap-4"
        >
          {data.map((work) => (
            <WorkCard.Root key={work.id}>
              <WorkCard.Frame>
                <WorkCard.Tilt
                  handleMouseEnter={() => setCardProps(work)}
                  handleMouseLeave={() => setCardProps(null)}
                >
                  <WorkCard.Btn
                    url={'https://github.com/EyzRyder'}
                    Icon={GithubIcon}
                    className="right-8 top-10 max-md:right-4 max-md:top-5"
                  />
                  <WorkCard.Btn
                    url={'#'}
                    Icon={ArrowUpLeftFromCircle}
                    className="bottom-10 max-md:bottom-5 max-md:right-4 md:left-8"
                  />
                  <WorkCard.Image coverImg={work.coverImg} />
                </WorkCard.Tilt>
                <WorkCard.Scale>
                  <WorkCard.Btn
                    url={'https://github.com/EyzRyder'}
                    Icon={GithubIcon}
                    className="right-8 top-10 max-md:right-4 max-md:top-5"
                  />
                  <WorkCard.Btn
                    url={'#'}
                    Icon={ArrowUpLeftFromCircle}
                    className="bottom-10 max-md:bottom-5 max-md:right-4 md:left-8"
                  />
                  <WorkCard.Image coverImg={work.coverImg} />
                  <WorkCard.Detail
                    id={work.id}
                    title={work.title}
                    descriptions={work.description}
                    role={work.role}
                    teck={work.teck}
                  />
                </WorkCard.Scale>
                <WorkCard.Wrapper />
              </WorkCard.Frame>
            </WorkCard.Root>
          ))}
        </motion.div>
      </motion.div>
      {fullWidth > 768 && cardProps && (
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
