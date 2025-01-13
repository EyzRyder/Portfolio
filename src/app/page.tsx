import Image from "next/image";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

// SVGS
import logo from "@/assets/mainLogo.svg";
import wave1 from "@/assets/wave1.svg";
import wave2 from "@/assets/wave2.svg";
import wave3 from "@/assets/wave3.svg";
import wave4 from "@/assets/wave4.svg";
import reactLogo from "@/assets/logo-react.svg";
import csharpLogo from "@/assets/language-csharp.svg";
import nodeLogo from "@/assets/logo-nodejs.svg";
import htmlLogo from "@/assets/logo-html-5.svg";
import cssLogo from "@/assets/logo-css-3.svg";
import jsLogo from "@/assets/logo-javascript.svg";
import tsLogo from "@/assets/typescript-logo.svg";
import ionicLogo from "@/assets/logo-ionic.svg";
import sassLogo from "@/assets/logo-sass.svg";
import tailwindLogo from "@/assets/tailwind.svg";

// Componets
import ContactForm from "@/components/ContactForm";
import Carousel from "@/components/Carousel";
import Logoicons from "@/components/Logoicons";

export default function Home() {
  return (
    <main className="relative z-[1] flex min-h-screen flex-col overflow-x-hidden ">
      <div
        id="home"
        className="relative grid min-h-screen w-full place-content-center lg:grid-cols-2 "
      >
        <div className="flex w-full items-center justify-center max-lg:absolute max-lg:left-1/2 max-lg:top-1/2 max-lg:z-[-1] max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:opacity-40">
          <Image src={logo} alt="GB Logo" />
        </div>
        <div className="flex flex-col justify-center gap-4 max-md:items-center max-md:px-6 lg:items-start">
          <h1 className="font-alt text-7xl max-lg:items-center max-md:text-center max-md:text-5xl max-[320px]:text-3xl">
            Ola, Sou <br />
            Gabriel Bessi <br />
            Um{" "}
            <span className="bg-gradient-to-r from-secondary via-tertiary to-primary bg-clip-text text-transparent ">
              Desenvolvedor
            </span>
          </h1>
          <p className="text-zinc-400 max-md:text-center">
            Fullstack Dev / Artista / Estudante
          </p>
          <a
            href="#contact"
            className="w-fit rounded-2xl border border-primary-tint bg-transparent px-8 py-4 font-alt text-primary-tint transition-all hover:border-primary hover:bg-secondary hover:text-primary"
          >
            Contate-me
          </a>
        </div>
        <Image src={wave1} alt="wave" className="absolute z-[-1]" />
        <Image
          src={wave2}
          alt="wave"
          className="absolute bottom-0 right-0  z-[-1]"
        />
      </div>
      <div
        id="about"
        className="relative flex min-h-screen flex-col items-center justify-center"
      >
        <h1 className="z-10 mb-3 flex items-center justify-center rounded-2xl border-2 border-primary-tint bg-gradient-to-r from-bg-main via-secondary to-bg-main px-3 py-2 text-center font-alt text-5xl text-primary">
          Sobre mim
        </h1>
        <div className="z-10 flex w-[30rem] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-primary-tint bg-gradient-to-r from-bg-main via-secondary to-bg-main px-6 py-4 max-sm:w-[20rem] max-[320px]:w-[15rem]">
          <Image
            src="https://avatars.githubusercontent.com/u/85580011?v=4"
            alt="ME"
            width={154}
            height={154}
            className="rounded-full shadow-lg shadow-primary-tint"
          />
          <p className="text-justify text-lg max-md:text-base">
            Sou Desenvolvedor Full Stack com formação técnica em Desenvolvimento
            de Sistemas pela Etec e atualmente cursando Análise e
            Desenvolvimento de Sistemas na Fatec São Paulo. Possuo ampla
            experiência em soluções Web e Backend, utilizando tecnologias como
            TypeScript (React, Angular, Node.js), C#, Java, Python, Go. Já
            participei de projetos em equipe que envolveram a implementação de
            APIs, integração de plataformas e desenvolvimento de interfaces
            intuitivas, sempre com foco em inovação e eficiência. {":]"}.
          </p>
        </div>
        <div className="max-md:flex max-md:flex-wrap max-md:items-center max-md:justify-center max-md:px-3 max-md:py-2">
          <Logoicons
            name="React.js"
            img={reactLogo}
            className="md:left-[20%] md:top-[10%] lg:left-[30%] "
          />

          <Logoicons
            name="Node.js"
            img={nodeLogo}
            className="md:left-[10%] md:top-[15%]  lg:left-[20%]"
          />

          <Logoicons
            name="CSharp"
            img={csharpLogo}
            className="md:left-[1%] md:top-[12%] lg:left-[10%] "
          />
          <Logoicons
            name="Javascript"
            img={jsLogo}
            className="md:right-[23%] md:top-[10%] lg:right-[27%] "
          />

          <Logoicons
            name="Typescript"
            img={tsLogo}
            className="md:right-[13%] md:top-[5%] xl:right-[17%] "
          />

          <Logoicons
            name="Ionic"
            img={ionicLogo}
            className="md:right-[3%] md:top-[6%] lg:right-[8%] "
          />

          <Logoicons
            name="Css"
            img={cssLogo}
            className="md:bottom-[4%] md:left-[14%] min-[950px]:bottom-[10%] lg:left-[20%]"
          />

          <Logoicons
            name="Html"
            img={htmlLogo}
            className="md:bottom-[8%] md:left-[3%] lg:left-[10%]"
          />
          <Logoicons
            name="Sass"
            img={sassLogo}
            className="md:bottom-[3%] md:right-[15%] min-[950px]:bottom-[13%] xl:right-[20%] "
          />

          <Logoicons
            name="Tailwindcss"
            img={tailwindLogo}
            className="md:bottom-[17%] md:right-[5%] xl:right-[10%]  "
          />
        </div>
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
      <div
        id="contact"
        className="relative min-h-screen max-md:mb-24 max-md:flex max-md:flex-col md:grid md:grid-cols-2"
      >
        <div className="z-10 flex flex-col items-center justify-center gap-6 max-2xl:ml-8 max-xl:ml-12 max-md:m-0 max-md:w-full max-md:px-4 max-md:py-3 ">
          <h1 className="text-center font-alt text-5xl text-primary max-xl:text-4xl">
            Entre em contato comigo!
          </h1>
          <p className="w-[29rem] text-justify max-xl:w-[20rem] max-md:w-full">
            Estou interessado em oportunidades emprego / freelance. No entanto,
            se você tiver outra solicitação ou pergunta, não hesite em entrar em
            contato comigo usando o formulário abaixo.
          </p>
          <ContactForm />
        </div>
        <div className="z-10 flex flex-col items-center justify-center gap-3  max-md:px-4 max-md:py-3 ">
          <h2 className="font-alt text-4xl text-primary-tint">
            Me adicione nas redes
          </h2>
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4 max-sm:px-2">
              <a
                className="flex w-52 items-center justify-center gap-3 rounded-tl-lg border-l-2 border-t-2 border-primary bg-secondary py-3 hover:bg-opacity-30 hover:text-primary max-sm:w-32 max-sm:px-2 max-sm:text-sm"
                href="https://www.linkedin.com/in/gabriel-bessi-5b0160230/"
              >
                <LinkedinIcon className="h-10 w-auto text-inherit " />
                <span>/gabriel-bessi</span>
              </a>
              <p className="flex w-52 items-center justify-center gap-3 rounded-tr-lg border-r-2 border-t-2 border-primary bg-secondary py-3 hover:cursor-pointer hover:bg-opacity-30 hover:text-primary max-sm:w-32 max-sm:px-2 max-sm:text-sm">
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
                <span>/eyzryder</span>
              </p>
            </div>
            <div className="flex gap-4 max-sm:px-2">
              <a
                className="flex w-52 items-center justify-center gap-3 rounded-bl-lg border-b-2 border-l-2 border-primary bg-secondary py-3 hover:bg-opacity-30 hover:text-primary max-sm:w-32 max-sm:px-2 max-sm:text-sm"
                href="https://github.com/EyzRyder?tab=repositories"
              >
                <GithubIcon className="h-10 w-auto text-inherit" />
                <span>/EyzRyder</span>
              </a>
              <a
                className="flex w-52 items-center justify-center gap-3 rounded-br-lg border-b-2 border-r-2 border-primary bg-secondary py-3 hover:bg-opacity-30 hover:text-primary max-sm:w-32 max-sm:px-2 max-sm:text-sm"
                href="https://www.instagram.com/eyz_ryder/"
              >
                <InstagramIcon className="h-10 w-auto text-inherit" />
                <span>/eyz_ryder</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Image className="absolute bottom-0 w-full" src={wave4} alt="wave" />
    </main>
  );
}
