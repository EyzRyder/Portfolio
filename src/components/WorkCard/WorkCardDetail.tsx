import { HTMLAttributes } from 'react'
import WorkCardBadge from './WorkCardBadge'

interface WorkCardDetailProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  title: string
  role: string
  teck: string[]
  descriptions: string
}
export default function WorkCardDetail({
  title,
  role,
  teck,
  descriptions,
}: WorkCardDetailProps) {
  return (
    <div className="absolute -bottom-[10rem] left-1/2 hidden h-fit w-[20rem]  -translate-x-1/2 flex-col gap-2 rounded-md transition delay-150 duration-500 ease-in-out group-hover/card:z-[3] group-hover/card:flex max-md:w-[18rem]">
      <WorkCardBadge teck={teck} />
      <div className="relative w-full">
        <header className="flex justify-between rounded-md bg-gradient-to-r from-secondary via-tertiary to-primary px-4 py-2 text-white ">
          <span>{title}</span>
          <span>Role: {role}</span>
        </header>
        <div className="flex h-[7.5rem] w-full overflow-hidden whitespace-normal rounded-md bg-gradient-to-b from-[rgba(235,172,51,0.12)] to-[rgba(221,194,142,0.6)] px-2 py-3 text-justify backdrop-blur-md">
          <p>{descriptions}</p>
        </div>
      </div>
    </div>
  )
}
