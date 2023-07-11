import { LucideIcon } from 'lucide-react'
import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface WorkCardButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  url: string
  Icon: ElementType | LucideIcon
}
export default function WorkCardButton({
  url,
  Icon,
  ...rest
}: WorkCardButtonProps) {
  return (
    <a
      href={url}
      className={twMerge(
        'absolute hidden rounded-full border-2 border-white p-1 text-white group-hover/card:z-[5] group-hover/card:block max-[325px]:border-0',
        rest.className,
      )}
    >
      <Icon />
    </a>
  )
}
