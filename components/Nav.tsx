import Image from "next/image";
import { AnchorHTMLAttributes, ReactNode } from "react";
import logo from "@/assets/mainLogo.svg";
import { AppWindow, ContactRound, MessageSquareDot } from "lucide-react";
import { GlassEffectWrapper } from "./GlassEffectWrapper";
import { DarkModeToggle } from "./DarkModeToggle";

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
        <NavBtn link="#about">
          <ContactRound className="text-grau-0 dark:text-zinc-100 hover:text-grau-3 dark:hover:text-grau-5" />
        </NavBtn>
        <NavBtn link="#work">
          <AppWindow className="text-grau-0 dark:text-zinc-100 hover:text-grau-3 dark:hover:text-grau-5" />
        </NavBtn>
        <NavBtn link="#contact">
          <MessageSquareDot className="text-grau-0 dark:text-zinc-100 hover:text-grau-3 dark:hover:text-grau-5" />
        </NavBtn>
      </GlassEffectWrapper>

      <DarkModeToggle />
    </ul>
  );
}

interface NavBtnProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  link?: string;
}

function NavBtn({ children, link, ...rest }: NavBtnProps) {
  return (
    <a
      href={link}
      className="w-8 h-8 flex justify-center items-center cursor-pointer
                 hover:text-grau-3 transition ease-in-out delay-75 duration-300
                 hover:transition-all "
      {...rest}
    >
      {children}
    </a>
  );
}

export { NavBar, NavBtn };
