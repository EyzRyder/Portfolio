import { Github, GithubIcon, LinkedinIcon } from "lucide-react";
import SVGComponent4 from "./svg/SVGComponent4";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6">
      <section className="z-10 flex flex-col items-center justify-center gap-3  max-md:px-4 max-md:py-3 ">
        <h2 className="font-alt text-4xl text-primary-tint">
          Me adicione nas redes
        </h2>
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-wrap items-center justify-center gap-4 max-sm:px-2">
            <a
              className="flex w-52 items-center justify-center gap-3 rounded-lg border-2 border-grau-0 bg-secondary py-3 hover:bg-opacity-30 hover:text-primary max-sm:w-32 max-sm:px-2 max-sm:text-sm"
              href="https://www.linkedin.com/in/gabriel-bessi-5b0160230/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>/gabriel-bessi</span>
            </a>
            <p className="flex w-52 items-center justify-center gap-3 rounded-lg border-2 border-grau-0 bg-secondary py-3 hover:cursor-pointer hover:bg-opacity-30 hover:text-primary max-sm:w-32 max-sm:px-2 max-sm:text-sm">
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
            <a
              className="flex w-52 items-center justify-center gap-3 rounded-lg border-2 border-grau-0 bg-secondary py-3 hover:bg-opacity-30 hover:text-primary max-sm:w-32 max-sm:px-2 max-sm:text-sm"
              href="https://github.com/EyzRyder"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>/EyzRyder</span>
            </a>
            <a
              className="flex w-52 items-center justify-center gap-3 rounded-lg border-2 border-grau-0 bg-secondary py-3 hover:bg-opacity-30 hover:text-primary max-sm:w-32 max-sm:px-2 max-sm:text-sm"
              href="https://www.instagram.com/eyz_ryder/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>/eyz_ryder</span>
            </a>
          </div>
        </div>
      </section>

      <div className="z-10 flex flex-col items-center justify-center gap-6 max-2xl:ml-8 max-xl:ml-12 max-md:m-0 max-md:w-full max-md:px-4 max-md:py-3 ">
        <h1 className="text-center font-alt text-5xl text-primary-tint max-xl:text-4xl">
          Entre em contato comigo!
        </h1>
        <p className="max-w-[500px] text-justify ">
          Estou interessado em oportunidades emprego / freelance. No entanto, se
          você tiver outra solicitação ou pergunta, não hesite em entrar em
          contato comigo usando o formulário abaixo.
        </p>
        <ContactForm />
      </div>
      <SVGComponent4 className="absolute bottom-0" />
    </div>
  );
}

export { Contact };
