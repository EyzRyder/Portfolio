import Image from "next/image";
import logo from "@/assets/mainLogo.svg";
import SVGComponent1 from "./svg/SVGComponent1";
import SVGComponent2 from "./svg/SVGComponent2";
import { GlassEffectWrapper } from "./GlassEffectWrapper";

function Intro() {
  return (
    <div
      id="home"
      className=" w-full grid min-h-screen place-content-center
            lg:grid-cols-2 z-[1]"
    >
      <div
        className="flex w-full items-center justify-center
                max-lg:absolute max-lg:left-1/2 max-lg:top-1/2
                max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:opacity-40"
      >
        <Image src={logo} alt="GB Logo" />
      </div>
      <div
        className="flex flex-col justify-center gap-4
                max-md:items-center max-md:px-6 lg:items-start max-lg:z-[1]"
      >
        <h1
          className="font-alt text-7xl text-grau-0
                    max-lg:items-center max-md:text-center max-md:text-5xl
                    max-[320px]:text-3xl"
        >
          Ola, Sou <br />
          Gabriel Bessi <br />
          Um{" "}
          <span
            className="bg-gradient-to-r from-grau-1 via-40% via-grau-2 to-90% to-grau-5
                        bg-clip-text text-transparent drop-shadow"
          >
            Desenvolvedor
          </span>
        </h1>
        <p className="text-grau-0 max-md:text-center">
          Fullstack Dev / Artista / Estudante
        </p>
        <a href="#contact">
          <GlassEffectWrapper className="font-alt text-grau-0 transition-all hover:border-grau-3 hover:bg- hover:text-grau-3">
            Contate-me
          </GlassEffectWrapper>
        </a>
      </div>
      <SVGComponent1 className="absolute -top-2 left-0 max-w-full" />
      <SVGComponent2 className="absolute bottom-0 right-0 " />
    </div>
  );
}
export { Intro };
