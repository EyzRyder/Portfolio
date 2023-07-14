import Image from 'next/image'
import logo from '@/assets/mainLogoNoShine.svg'
import { FileCode, Mail, User2 } from 'lucide-react'
// import Link from 'next/link'

export default function Navbar() {
  return (
    <aside className="fixed z-20 flex justify-center gap-2 rounded-br-2xl rounded-tr-2xl bg-zinc-600 px-3 py-6 max-md:bottom-2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:rounded-2xl max-md:px-6  max-md:py-3 md:top-1/2 md:-translate-y-1/2 md:flex-col">
      <a
        href="#home"
        className="flex h-12 w-12 items-center justify-center transition-all hover:rounded-full hover:bg-primary"
      >
        <Image src={logo} alt="home button" className="w-9" />
      </a>
      <a
        href="#about"
        className="flex h-12 w-12 items-center justify-center transition-all hover:rounded-full hover:bg-primary"
      >
        <User2 />
      </a>
      <a
        href="#work"
        className="flex h-12 w-12 items-center justify-center transition-all hover:rounded-full hover:bg-primary"
      >
        <FileCode />
      </a>
      <a
        href="#contact"
        className="flex h-12 w-12 items-center justify-center transition-all hover:rounded-full hover:bg-primary"
      >
        <Mail />
      </a>
    </aside>
  )
}
