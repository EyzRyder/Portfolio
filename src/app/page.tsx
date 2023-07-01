import Image from 'next/image'
import logo from '@/assets/mainLogo.svg'
import wave1 from '@/assets/wave1.svg'
import wave2 from '@/assets/wave2.svg'
import wave3 from '@/assets/wave3.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        id="home"
        className="relative grid h-screen w-full grid-cols-2 place-content-center"
      >
        <div className="flex items-center justify-center ">
          <Image src={logo} alt="GB Logo" />
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="font-alt text-7xl">
            Ola, Sou <br />
            Gabriel Bessi <br />
            Um{' '}
            <span className="bg-gradient-to-r from-secondary via-tertiary to-primary bg-clip-text text-transparent ">
              Desenvolvedor
            </span>
          </h1>
          <p className="text-zinc-400">Fullstack Dev / Artista / Estudante</p>
          <a
            href="#contact"
            className="rounded-2xl border border-primary-tint bg-transparent px-8 py-4 font-alt text-primary-tint transition-all hover:border-primary hover:bg-secondary hover:text-primary "
          >
            Contate-me
          </a>
        </div>
        <Image src={wave1} alt="wave" className="absolute" />
        <Image src={wave2} alt="wave" className="absolute bottom-0 right-0" />
      </div>
      <div
        id="about"
        className="relative flex h-screen flex-col items-center justify-center"
      >
        <h1 className="z-10 font-alt">Sobre mim</h1>
        <div className="z-10 flex w-[49rem] flex-col items-center justify-center">
          <Image
            src="https://avatars.githubusercontent.com/u/85580011?v=4"
            alt="ME"
            width={144}
            height={144}
            className="rounded-full"
          />
          <p>
            No momento estou estudando na Etec Albert Einstein aprendendo
            desenvolvimento de sistemas na escola. Sou um grande fã de
            desenvolvimento de sites, dispositivos móveis e bancos de dados
            trabalhando para ser um grande programador e artista {':]'}.
          </p>
        </div>
        <Image
          src={wave3}
          alt="wave"
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div id="work" className="relative flex h-screen"></div>
      <div id="contact" className="relative flex h-screen"></div>
    </main>
  )
}
