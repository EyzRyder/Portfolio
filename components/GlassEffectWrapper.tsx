import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
        "flex lg:flex-col max-lg:flex-row p-4 gap-4 bg-[#FEF3C7] bg-opacity-30 backdrop-blur-md justify-center items-center rounded-3xl border-2 border-grau-0 dark:border-grau-4",
        "dark:border-zinc-200",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export { GlassEffectWrapper };
