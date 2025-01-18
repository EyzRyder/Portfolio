"use client";

import { cardProps } from "@/lib/types";
import useMousePosition from "@/useHook/useMousePosition";
import { Carousel, CarouselContent } from "./ui/carousel";
import { CSSProperties, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Autoplay from "embla-carousel-autoplay";

type fusiona = cardProps & HTMLAttributes<HTMLDivElement>;
interface WorkProps extends fusiona {
  even: boolean;
}

export default function WorkFollowCard({
  title,
  role,
  teck,
  descriptions,
  className,
  even,
  ...rest
}: WorkProps) {
  const { x, y } = useMousePosition() as unknown as {
    x: number;
    y: number;
  };
  const frameStyle: CSSProperties = {
    top: `${y + 10}px`,
    transition:
      "top left position 500ms cubic-bezier(0.075, 0.82, 0.165, 1) 150ms",
  };
  if (even) {
    frameStyle.left = `${x + 30}px`;
  } else {
    frameStyle.left = `${x - 350}px`;
  }
  return (
    <div
      className={twMerge(
        "details z-10 w-80 block aspect-[1] h-fit overflow-hidden rounded-md ",
        className,
      )}
      {...rest}
      style={frameStyle}
    >
      <div
        className="head flex flex-col justify-between rounded-md bg-gradient-to-r
                from-grau-1 via-grau-2 to-grau-5 px-4 py-2 text-white "
      >
        <span className="font-alt text-xl">{title}</span>
        <span>
          <span className="text-xs font-bold">Role:</span>{" "}
          <span className="text-xs">{role}</span>
        </span>
      </div>
      <div className="content flex flex-col gap-2 rounded-md bg-gradient-to-b from-[rgba(235,172,51,0.12)] to-[rgba(221,194,142,0.6)] px-2 py-3 backdrop-blur-md">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="ml-4 gap-8">
            {teck.map((t: string) => (
              <span
                className="badge rounded-2xl bg-gradient-to-r from-grau-1
                                via-grau-2 to-grau-5 px-4 py-2 text-white text-xs
                                font-bold whitespace-nowrap "
                key={t}
              >
                {t}
              </span>
            ))}
          </CarouselContent>
        </Carousel>
        <p className="text-grau-0">{descriptions}</p>
      </div>
    </div>
  );
}
