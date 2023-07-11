import Image, { StaticImageData } from 'next/image'
import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface WorkCardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  coverImg: string | StaticImageData
}
export default function WorkCardImage({
  coverImg,
  ...rest
}: WorkCardImageProps) {
  return (
    <Image
      src={coverImg}
      alt="image"
      className={twMerge(
        'cover pointer-events-none  rounded-2xl object-cover object-center transition duration-300 ease-in-out max-md:h-[12.93rem] max-md:min-h-[12.93rem] max-md:w-[20rem] max-md:min-w-[20rem] max-[325px]:h-[9.1875rem] max-[325px]:min-h-[9.1875rem] max-[325px]:w-[15.1875rem] max-[325px]:min-w-[15.1875rem] md:h-[23rem] md:min-h-[23rem] md:w-[36rem] md:min-w-[36rem]',
        rest.className,
      )}
    />
  )
}
