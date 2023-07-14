import Image, { StaticImageData } from 'next/image'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface LogoiconsProps extends HTMLAttributes<HTMLDivElement> {
  img: string | StaticImageData
  name: string
}
export default function Logoicons({ img, name, ...rest }: LogoiconsProps) {
  return (
    <div
      className={twMerge(
        'group z-20 h-[5.625rem] w-[5.625rem] rounded-lg p-[0.125rem] transition-all hover:bg-gradient-to-r hover:from-secondary hover:to-primary max-md:relative max-md:h-[4rem] max-md:w-[4rem] md:absolute',
        rest.className,
      )}
    >
      <p className="absolute left-1/2 top-1/2 z-10 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center transition-all group-hover:flex">
        {name}
      </p>
      <div
        className="flex h-full w-full items-center justify-center rounded-lg bg-bg-main px-1 py-2 transition-all group-hover:bg-[rgba(250,237,171,0.20),rgb(67,2,32)] group-hover:blur-[0.21875rem]
"
      >
        <Image src={img} alt={name} className="h-full w-full" />
      </div>
    </div>
  )
}
