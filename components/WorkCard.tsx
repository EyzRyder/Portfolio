import { WorkProps } from "@/lib/types";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { Tilt } from "react-tilt";
import SVGComponent2 from "./svg/SVGComponent2";
import WorkFollowCard from "./WorkFollowCard";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  speed: 1000,
  scale: 1.2,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

function WorkCard({
  data: workData,
  index,
}: {
  data: WorkProps;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full h-full flex sm:flex-row flex-col sm:odd:flex-row-reverse
                    max-sm:justify-center items-center gap-6 group"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="max-w-[380px] h-[400px] w-full rounded-3xl
            flex justify-center items-center z-[1]
            bg-[linear-gradient(120deg,#6C162B,#B8522E,#E8A21F,#F0CF20)] relative"
      >
        <div
          className="relative w-[98%] h-[98%] bg-grau-0 bg-[url('/assets/Meteor.svg')] rounded-3xl
                    flex flex-col justify-center items-center"
        >
          <PCFrame>
            {workData.url ? (
              <a href={workData.url} target={workData.url}>
                <TiltCard imageUrl={workData.image} />
              </a>
            ) : (
              <TiltCard imageUrl={workData.image} />
            )}
          </PCFrame>
        </div>

        {workData.githubRep && <GithubIcon link={workData.githubRep} />}
      </div>
      <WorkFollowCard
        _id={workData._id}
        title={workData.title}
        descriptions={workData.descriptions}
        role={workData.role}
        teck={workData.teck}
        key={workData.title}
        data-hover={isHovered}
        even={index % 2 == 0}
        className="sm:data-[hover=true]:absolute sm:data-[hover=false]:transition-all
                "
      />
      <SVGComponent2
        className="absolute group-odd:left-0 group-odd:rotate-180
                group-even:right-0"
      />
    </div>
  );
}

const PCFrame = ({ children }: { children: ReactNode }) => (
  <>
    <div
      className="rounded-3xl outline outline-offset-0 outline-4 outline-zinc-300
                      relative border-4 border-zinc-700 w-[300px] h-[200px] "
    >
      {children}
    </div>
    <svg
      width="95%"
      height={16}
      viewBox="0 0 576 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M42.757 0L0 1h576l-42.235-1H42.757z" fill="#E8E8E8" />
      <path
        d="M0 1h576c0 8.284-6.716 15-15 15H15C6.716 16 0 9.284 0 1z"
        fill="url(#paint0_linear_1161_4327)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1161_4327"
          x1={288}
          y1={1}
          x2={288}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.745} stopColor="#B8B8B8" />
          <stop offset={0.9} stopColor="#8B8B8B" />
          <stop offset={1} stopColor="#565656" />
        </linearGradient>
      </defs>
    </svg>
  </>
);

const GithubIcon = ({ link }: { link: string }) => (
  <a
    href={link}
    className="absolute top-5 right-5 border-2 border-grau-5 rounded-full p-1 hover:cursor-pointer hover:animate-pulse"
    target="_blank"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=" text-grau-5 w-8 h-8"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  </a>
);

const TiltCard = ({ imageUrl }: { imageUrl: string }) => (
  <Tilt
    options={defaultOptions}
    className="tilt group-hover/card:absolute group-hover:z-[2]
                            w-full h-full"
  >
    <Image
      src={imageUrl}
      alt="image"
      width={576}
      height={368}
      className="cover pointer-events-none rounded-2xl object-cover
                        object-center transition duration-300 ease-in-out
                        w-full h-full border-8 border-black"
    />
  </Tilt>
);

export { WorkCard };
