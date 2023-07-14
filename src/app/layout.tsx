import { ReactNode } from 'react'
import { Poppins, Cherry_Bomb_One as Cherry } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-poppins',
})
const cherry = Cherry({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cherry',
})

export const metadata = {
  title: 'Bessi Devfolio',
  description:
    'Descubra as habilidades de um desenvolvedor freelancer apaixonado por transformar ideias em realidade. Aqui, você encontrará uma coleção diversificada de projetos que demonstram minha expertise em desenvolvimento web e aplicativos móveis. Estou disponível para novos trabalhos e ansioso por desafios criativos. Entre em contato para discutir suas necessidades e começar a criar hoje mesmo!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cherry.variable} relative bg-bg-main font-sans text-zinc-100`}
      >
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
