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
        'absolute hidden rounded-full border-2 border-zinc-500 p-1 text-zinc-500  shadow-lg hover:animate-pulse hover:border-primary-tint hover:text-primary-tint group-hover/card:z-[5] group-hover/card:block max-[325px]:border-0',
        rest.className,
      )}
    >
      <Icon className="text-inherit" />
    </a>
  )
}
