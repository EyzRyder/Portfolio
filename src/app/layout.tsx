import { ReactNode } from 'react'
import { Poppins, Cherry_Bomb_One as Cherry } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/Navbar'

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
  title: 'Bessi Dev',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cherry.variable} relative bg-bg-main font-sans text-zinc-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}