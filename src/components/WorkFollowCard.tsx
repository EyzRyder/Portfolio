"use client";

import { cardProps } from "@/libs/types";
import useMousePosition from "@/useHook/useMousePosition";
import { CSSProperties, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type WorkProps = cardProps & HTMLAttributes<HTMLDivElement>;

export default function WorkFollowCard({
  title,
  role,
  teck,
  descriptions,
  ...rest
}: WorkProps) {
  const { x, y } = useMousePosition() as unknown as {
    x: number;
    y: number;
  };
  const frameStyle: CSSProperties = {
    top: `${y + 10}px`,
    left: `${x + 30}px`,
  };
  return (
    <div
      className={twMerge(
        "details z-2 absolute aspect-[1] h-fit w-80 overflow-hidden rounded-md transition delay-150 duration-500 ease-[cubic-bezier(0.075,0.82,0.165,1)]",
        rest.className
      )}
      style={frameStyle}
    >
      <div className="head flex flex-col justify-between rounded-md bg-gradient-to-r from-secondary via-tertiary to-primary px-4 py-2 text-white ">
        <span className="font-alt text-xl">{title}</span>
        <span>
          <span className="text-xs font-bold">Role:</span>{" "}
          <span className="text-xs">{role}</span>
        </span>
      </div>
      <div className="content flex flex-col gap-2 rounded-md bg-gradient-to-b from-[rgba(235,172,51,0.12)] to-[rgba(221,194,142,0.6)] px-2 py-3 backdrop-blur-md">
        <div className="badgeList flex animate-slide flex-row gap-2 whitespace-nowrap">
          {teck.map((t: string) => (
            <span
              className="badge ml-10 rounded-2xl bg-gradient-to-r from-secondary via-tertiary to-primary px-4 py-2 text-xs font-bold"
              key={t}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-zinc-100">{descriptions}</p>
      </div>
    </div>
  );
}
