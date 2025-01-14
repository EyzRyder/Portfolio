import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";
import logo from "@/assets/mainLogo.svg";
import {
  AppWindow,
  ContactRound,
  MessageSquareDot,
  SunMoon,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

function NavBar() {
  return (
    <ul
      className="fixed lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10
            max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:bottom-0
            flex lg:flex-col max-lg:flex-row gap-6 lg:px-6 max-lg:py-6"
    >
      <GlassEffectWrapper>
        <NavBtn>
          <Image src={logo} alt="logo" />
        </NavBtn>
      </GlassEffectWrapper>

      <GlassEffectWrapper>
        <NavBtn>
          <AppWindow className="text-grau-0 hover:text-inherit" />
        </NavBtn>
        <NavBtn>
          <ContactRound className="text-grau-0 hover:text-inherit" />
        </NavBtn>
        <NavBtn>
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

function NavBtn({ children }: { children: ReactNode }) {
  return (
    <div className="w-8 h-8 flex justify-center items-center cursor-pointer hover:text-grau-3">
      {children}
    </div>
  );
}

interface GlassEffectWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function GlassEffectWrapper({
  children,
  className,
  ...rest
}: GlassEffectWrapperProps) {
  return (
    <div
      className={twMerge(
        "flex lg:flex-col max-lg:flex-row p-4 gap-4 backdrop-blur-md justify-center items-center rounded-3xl border-2 border-grau-0",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export { NavBar, GlassEffectWrapper };
