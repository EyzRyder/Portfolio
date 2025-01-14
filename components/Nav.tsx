import Image from "next/image";
import { ReactNode } from "react";
import logo from "@/assets/mainLogo.svg";
import {
  AppWindow,
  ContactRound,
  MessageSquareDot,
  SunMoon,
} from "lucide-react";
import { GlassEffectWrapper } from "./GlassEffectWrapper";

function NavBar() {
  return (
    <ul
      className="fixed lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-20
            max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:bottom-0
            flex lg:flex-col max-lg:flex-row gap-6 lg:px-6 max-lg:py-6"
    >
      <GlassEffectWrapper>
        <NavBtn link="#home">
          <Image src={logo} alt="logo" />
        </NavBtn>
      </GlassEffectWrapper>

      <GlassEffectWrapper>
        <NavBtn link="#work">
          <AppWindow className="text-grau-0 hover:text-inherit" />
        </NavBtn>
        <NavBtn link="#about">
          <ContactRound className="text-grau-0 hover:text-inherit" />
        </NavBtn>
        <NavBtn link="#contact">
          <MessageSquareDot className="text-grau-0 hover:text-inherit" />
        </NavBtn>
      </GlassEffectWrapper>

      <GlassEffectWrapper>
        <NavBtn>
          <SunMoon className="text-grau-0 hover:text-inherit" />
        </NavBtn>
      </GlassEffectWrapper>
    </ul>
  );
}

function NavBtn({ children, link }: { children: ReactNode; link?: string }) {
  return (
    <a
      href={link}
      className="w-8 h-8 flex justify-center items-center cursor-pointer hover:text-grau-3 transition-all"
    >
      {children}
    </a>
  );
}

export { NavBar };
