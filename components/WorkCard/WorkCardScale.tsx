import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
interface WorkCardScaleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
export default function WorkCardScale({
  children,
  ...rest
}: WorkCardScaleProps) {
  return (
    <div
      className={twMerge(
        'grid place-content-center group-hover/card:absolute group-hover/card:z-[2] max-md:h-[12.93rem] max-md:min-h-[12.93rem] max-md:w-[20rem] max-md:min-w-[20rem] md:hidden  md:h-[23rem] md:min-h-[23rem] md:w-[36rem] md:min-w-[36rem]',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
