import Image from 'next/image'
import logo from '@/assets/mainLogo.svg'
import wave1 from '@/assets/wave1.svg'
import wave2 from '@/assets/wave2.svg'
import wave3 from '@/assets/wave3.svg'
import wave4 from '@/assets/wave4.svg'
import ContactForm from '@/components/ContactForm'

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
        <h1 className="z-10 mb-3 flex items-center justify-center rounded-2xl border-2 border-primary-tint bg-gradient-to-r from-bg-main via-secondary to-bg-main px-3 py-2 text-center font-alt text-5xl text-primary">
          Sobre mim
        </h1>
        <div className="z-10 flex w-[30rem] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-primary-tint bg-gradient-to-r from-bg-main via-secondary to-bg-main px-6 py-4">
          <Image
            src="https://avatars.githubusercontent.com/u/85580011?v=4"
            alt="ME"
            width={144}
            height={144}
            className="rounded-full"
          />
          <p className="text-justify text-lg">
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
      <div id="work" className="relative flex h-screen">
        <h1>Portfolio</h1>
        <p>Ver mais</p>
        <div>
          <span>WEB</span>
          <span>Tec</span>
        </div>
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
        <div className="z-10 flex flex-col items-center justify-center">
          <h2 className="font-alt">Me adicione nas rede</h2>
          <div>
            <div>
              <span>in</span>
              <span>disc</span>
            </div>
            <div>
              <span>gituhb</span>
              <span>insta</span>
            </div>
          </div>
        </div>
        <Image className="absolute bottom-0 w-full" src={wave4} alt="wave" />
      </div>
    </main>
  )
}
