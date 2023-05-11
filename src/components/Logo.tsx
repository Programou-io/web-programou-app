import { HTMLAttributes } from 'react'

export type LogoProps = HTMLAttributes<HTMLElement>

export function Logo(props: LogoProps) {
  return (
    <h1 {...props}>
      <span className="text-turquoise-500">&lt;&nbsp;</span>
      Programou
      <span className="text-turquoise-500">&nbsp;/&gt;</span>
    </h1>
  )
}
