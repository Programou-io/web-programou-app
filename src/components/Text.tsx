import { HTMLAttributes } from 'react'

type TextProps = HTMLAttributes<HTMLParagraphElement>

export function Text(props: TextProps) {
  return <p {...props} />
}
