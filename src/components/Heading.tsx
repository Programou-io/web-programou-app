import { HTMLAttributes } from 'react'

type HeadingProps = HTMLAttributes<HTMLParagraphElement>

export function Heading({ className, ...props }: HeadingProps) {
  return <h2 className={`font-bold ${className}`} {...props} />
}
