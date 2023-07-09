import { ArrowUpLeftFromCircle, GithubIcon } from 'lucide-react'

import Image, { StaticImageData } from 'next/image'
import { HTMLAttributes } from 'react'
import { Tilt } from 'react-tilt'
import { twMerge } from 'tailwind-merge'

const defaultOptions = {
  reverse: true,
  max: 35,
  perspective: 1000,
  speed: 1000,
  scale: 1.1,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
}

interface WorkProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  coverImg: string | StaticImageData
  url: string
  giturl?: string
  handleMouseEnter: Function
  handleMouseLeave: Function
}

export default function WorkCard({
  coverImg,
  url,
  giturl,
  handleMouseEnter,
  handleMouseLeave,
  ...rest
}: WorkProps) {
  return (
    <div
      className={twMerge(
        'card group/card block min-h-[23rem] min-w-[36rem]',
        rest.className,
      )}
    >
      <div className="frame relative h-full w-full group-hover/card:cursor-pointer">
        <Tilt
          options={defaultOptions}
          className="tilt grid h-full w-full place-content-center group-hover/card:absolute group-hover/card:z-[2]"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          {giturl && (
            <a
              href={giturl}
              className="git absolute right-8 top-10 hidden rounded-full border-2 border-white p-1 text-white group-hover/card:z-[5] group-hover/card:block"
            >
              <GithubIcon />
            </a>
          )}
          <a
            href={url}
            className="arrow absolute bottom-10 left-8 hidden rounded-full border-2 border-white p-1 text-white group-hover/card:z-[5] group-hover/card:block"
          >
            <ArrowUpLeftFromCircle />
          </a>
          <Image
            src={coverImg}
            alt="image"
            className="cover pointer-events-none h-full w-full rounded-2xl object-cover object-center transition duration-300 ease-in-out"
          />
        </Tilt>
        <div
          className="Wrapper absolute left-1/2 top-1/2  h-[23rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-[2.5rem] border-solid border-secondary transition duration-300 ease-in-out
          before:absolute before:left-1/2 before:top-1/2 before:h-[23rem] before:w-[36rem] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-2xl before:border-[2.3rem] before:border-dotted before:border-tertiary before:blur-[7px] before:transition before:duration-300 before:ease-in-out after:absolute
          after:left-1/2 after:top-1/2 after:h-[23rem] after:w-[36rem] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-2xl after:border-[2.3rem] after:border-dotted after:border-primary after:transition after:duration-300 after:ease-in-out group-hover/card:blur-[7px]
          group-hover/card:before:blur-[20px]"
        ></div>
      </div>
    </div>
  )
}
