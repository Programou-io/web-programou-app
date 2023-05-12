import { HTMLAttributes } from 'react'

type TextProps = HTMLAttributes<HTMLParagraphElement>
export function Text(props: TextProps) {
  return <p {...props} />
}

type HeadingProps = HTMLAttributes<HTMLParagraphElement>
export function Heading({ className, ...props }: HeadingProps) {
  return <h2 className={`font-bold ${className}`} {...props} />
}
