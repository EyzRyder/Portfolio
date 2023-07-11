import { ReactNode } from 'react'

export default function WorkCardFrame({ children }: { children: ReactNode }) {
  return (
    <div className="frame relative  max-md:h-[12.93rem] max-md:min-h-[12.93rem] max-md:w-[20rem] max-md:min-w-[20rem] max-[325px]:h-[9.1875rem] max-[325px]:w-[15.1875rem] md:h-[23rem] md:min-h-[23rem] md:w-[36rem] md:min-w-[36rem]">
      {children}
    </div>
  )
}
