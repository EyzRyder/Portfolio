import Image from 'next/image'
import logo from '@/assets/mainLogo.svg'
import wave1 from '@/assets/wave1.svg'
import wave2 from '@/assets/wave2.svg'
import wave3 from '@/assets/wave3.svg'
import wave4 from '@/assets/wave4.svg'
import reactLogo from '@/assets/logo-react.svg'
import ContactForm from '@/components/ContactForm'
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react'
import Carousel from '@/components/Carousel'
import Logoicons from '@/components/Logoicons'

export default function Home() {
  return (
    <main className="relative z-[1] flex min-h-screen flex-col overflow-x-hidden">
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
        <h1 className="z-10 mb-3 flex items-center justify-center rounded-2xl border-2 border-primary-tint bg-gradient-to-r from-bg-main via-secondary to-bg-main px-3 py-2 text-center font-alt text-5xl text-primary">
          Sobre mim
        </h1>
        <div className="z-10 flex w-[30rem] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-primary-tint bg-gradient-to-r from-bg-main via-secondary to-bg-main px-6 py-4">
          <Image
            src="https://avatars.githubusercontent.com/u/85580011?v=4"
            alt="ME"
            width={154}
            height={154}
            className="rounded-full shadow-lg shadow-primary-tint"
          />
          <p className="text-justify text-lg">
            No momento estou estudando na Etec Albert Einstein aprendendo
            desenvolvimento de sistemas na escola. Sou um grande fã de
            desenvolvimento de sites, dispositivos móveis e bancos de dados
            trabalhando para ser um grande programador e artista {':]'}.
          </p>
        </div>

        <Logoicons
          name="React"
          img={reactLogo}
          className="left-[30%] top-[10%] "
        />

        <Logoicons
          name="React"
          img={reactLogo}
          className="left-[20%] top-[20%] "
        />

        <Logoicons
          name="React"
          img={reactLogo}
          className="left-[10%] top-[15%] "
        />
        <Image
          src={wave3}
          alt="wave"
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div
        id="work"
        className="flex h-screen flex-col items-center gap-3 space-y-5 overflow-hidden"
      >
        <h1 className="font-alt text-5xl text-primary">Portfolio</h1>
        {/* <p className="underline">Ver mais {'>>'}</p> */}
        <Carousel />
        {/*
        <div>
          <span>WEB</span>
          <span>Tec</span>
        </div>
         */}
      </div>
      <div id="contact" className="relative grid h-screen grid-cols-2">
        <div className="z-10 flex flex-col items-center justify-center gap-6">
          <h1 className="font-alt text-5xl text-primary">
            Entre em contato comigo!
          </h1>
          <p className="w-[29rem] text-justify">
            Estou interessado em oportunidades emprego / freelance. No entanto,
            se você tiver outra solicitação ou pergunta, não hesite em entrar em
            contato comigo usando o formulário abaixo.
          </p>
          <ContactForm />
        </div>
        <div className="z-10 flex flex-col items-center justify-center gap-3">
          <h2 className="font-alt text-4xl text-primary-tint">
            Me adicione nas rede
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <a
                className="flex w-52 items-center justify-center gap-3 rounded-tl-lg border-l-2 border-t-2 border-primary bg-secondary py-3 hover:bg-opacity-30 hover:text-primary"
                href="#"
              >
                <LinkedinIcon className="h-10 w-auto text-inherit" />
                <span>/gabriel-bessi</span>
              </a>
              <a
                className="flex w-52 items-center justify-center gap-3 rounded-tr-lg border-r-2 border-t-2 border-primary bg-secondary py-3 hover:bg-opacity-30 hover:text-primary"
                href="#"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-10 w-auto text-inherit"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Discord</title>
                  <path
                    fill="currentcolor"
                    d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                  ></path>
                </svg>
                <span>/EyzRyder</span>
              </a>
            </div>
            <div className="flex gap-4">
              <a
                className="flex w-52 items-center justify-center gap-3 rounded-bl-lg border-b-2 border-l-2 border-primary bg-secondary py-3 hover:bg-opacity-30 hover:text-primary"
                href="#"
              >
                <GithubIcon className="h-10 w-auto text-inherit" />
                <span>/EyzRyder</span>
              </a>
              <a
                className="flex w-52 items-center justify-center gap-3 rounded-br-lg border-b-2 border-r-2 border-primary bg-secondary py-3 hover:bg-opacity-30 hover:text-primary"
                href="#"
              >
                <InstagramIcon className="h-10 w-auto text-inherit" />
                <span>/eyz_ryder</span>
              </a>
            </div>
          </div>
        </div>
        <Image className="absolute bottom-0 w-full" src={wave4} alt="wave" />
      </div>
    </main>
  )
}
