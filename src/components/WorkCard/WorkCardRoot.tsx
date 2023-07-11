import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface WorkCardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function WorkCardRoot({ children, ...rest }: WorkCardRootProps) {
  return (
    <div
      className={twMerge(
        'card group/card block max-md:h-[12.93rem] max-md:min-h-[12.93rem] max-md:w-[20rem] max-md:min-w-[20rem] max-[325px]:h-[9.1875rem] max-[325px]:w-[15.1875rem] md:h-[23rem] md:min-h-[23rem] md:w-[36rem] md:min-w-[36rem]',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
