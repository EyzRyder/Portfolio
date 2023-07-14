import { HTMLAttributes } from 'react'
import WorkCardBadge from './WorkCardBadge'
import { cardProps } from '@/libs/types'

type WorkCardDetailProps = cardProps & HTMLAttributes<HTMLDivElement>
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
        <header className="flex flex-col justify-between rounded-md bg-gradient-to-r from-secondary via-tertiary to-primary px-4 py-2 text-white ">
          <span className="font-alt text-xl">{title}</span>
          <span>
            <span className="text-xs font-bold">Role:</span>{' '}
            <span className="text-xs">{role}</span>
           </span>
        </header>
        <div className="flex h-[7.5rem] w-full overflow-hidden overflow-y-scroll whitespace-normal rounded-md bg-gradient-to-b from-[rgba(235,172,51,0.12)] to-[rgba(221,194,142,0.6)] px-2 py-3 text-justify backdrop-blur-md">
          <p className="px-1 py-2">{descriptions}</p>
        </div>
      </div>
    </div>
  )
}
