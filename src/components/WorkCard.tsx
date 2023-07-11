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
        'card group/card block max-md:h-[12.93rem] max-md:min-h-[12.93rem] max-md:w-[20rem] max-md:min-w-[20rem] max-[325px]:h-[9.1875rem] max-[325px]:w-[15.1875rem] md:h-[23rem] md:min-h-[23rem] md:w-[36rem] md:min-w-[36rem]',
        rest.className,
      )}
    >
      <div className="frame relative max-md:h-[12.93rem] max-md:min-h-[12.93rem] max-md:w-[20rem] max-md:min-w-[20rem] max-[325px]:h-[9.1875rem] max-[325px]:w-[15.1875rem] md:h-[23rem] md:min-h-[23rem] md:w-[36rem] md:min-w-[36rem]">
        <Tilt
          options={defaultOptions}
          className="tilt grid  place-content-center group-hover/card:absolute group-hover/card:z-[2] max-md:h-[12.93rem] max-md:min-h-[12.93rem] max-md:w-[20rem] max-md:min-w-[20rem]  md:h-[23rem] md:min-h-[23rem] md:w-[36rem] md:min-w-[36rem]"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          {giturl && (
            <a
              href={giturl}
              className="git  absolute right-8 top-10 hidden rounded-full border-2 border-white p-1 text-white group-hover/card:z-[5] group-hover/card:block max-md:right-4 max-md:top-5 max-[325px]:border-0"
            >
              <GithubIcon />
            </a>
          )}
          <a
            href={url}
            className="arrow absolute bottom-10 hidden rounded-full border-2 border-white p-1 text-white group-hover/card:z-[5] group-hover/card:block max-md:bottom-5 max-md:right-4 max-[325px]:border-0 md:left-8"
          >
            <ArrowUpLeftFromCircle />
          </a>
          <Image
            src={coverImg}
            alt="image"
            className="cover pointer-events-none  rounded-2xl object-cover object-center transition duration-300 ease-in-out max-md:h-[12.93rem] max-md:min-h-[12.93rem] max-md:w-[20rem] max-md:min-w-[20rem] max-[325px]:h-[9.1875rem] max-[325px]:min-h-[9.1875rem] max-[325px]:w-[15.1875rem] max-[325px]:min-w-[15.1875rem] md:h-[23rem] md:min-h-[23rem] md:w-[36rem] md:min-w-[36rem]"
          />
        </Tilt>
        <div
          className="Wrapper absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 rounded-2xl border-[2.5rem] border-solid border-secondary transition duration-300 ease-in-out before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-2xl
          before:border-[2.3rem] before:border-dotted before:border-tertiary before:blur-[7px] before:transition before:duration-300 before:ease-in-out after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-2xl after:border-[2.3rem] after:border-dotted after:border-primary
          after:transition after:duration-300 after:ease-in-out group-hover/card:blur-[7px] group-hover/card:before:blur-[20px]

          max-md:h-[12.93rem] max-md:min-h-[12.93rem] max-md:w-[20rem] max-md:min-w-[20rem] max-md:border-[1.5rem]
          before:max-md:h-[12.93rem] before:max-md:min-h-[12.93rem] before:max-md:w-[20rem] before:max-md:min-w-[20rem] before:max-md:border-[1.3rem]
          after:max-md:h-[12.93rem] after:max-md:min-h-[12.93rem] after:max-md:w-[20rem] after:max-md:min-w-[20rem] after:max-md:border-[1.3rem]

          max-[325px]:h-[9.1875rem] max-[325px]:min-h-[9.1875rem] max-[325px]:w-[15.1875rem] max-[325px]:min-w-[15.1875rem] max-[325px]:border-[0.5rem]

          before:max-[325px]:h-[9.1875rem] before:max-[325px]:min-h-[9.1875rem] before:max-[325px]:w-[15.1875rem] before:max-[325px]:min-w-[15.1875rem] before:max-[325px]:border-[0.5rem]

          after:max-[325px]:h-[9.1875rem] after:max-[325px]:min-h-[9.1875rem] after:max-[325px]:w-[15.1875rem] after:max-[325px]:min-w-[15.1875rem] after:max-[325px]:border-[0.5rem] md:h-[23rem] md:w-[36rem]

          md:before:h-[23rem] md:before:w-[36rem] md:after:h-[23rem] md:after:w-[36rem] "
        ></div>
      </div>
    </div>
  )
}
