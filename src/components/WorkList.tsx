'use client'

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
  // const track = useRef<HTMLDivElement>(null)

  return (
    <div className="flex items-center gap-24 px-[5rem] py-12">
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
    </div>
  )
}
