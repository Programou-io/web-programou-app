import { HtmlHTMLAttributes } from 'react'
import { HeaderLinkButton } from './HeaderLinkButton'

interface HeaderProps extends HtmlHTMLAttributes<'div'> {}

export function Header(props: HeaderProps) {
  return (
    <>
      <div className="flex justify-between items-center m-auto max-w-3xl my-4">
        <h1 className="font-extrabold">programou</h1>
        <div className="flex gap-2">
          <HeaderLinkButton name="inicío" path="/" />
          <HeaderLinkButton name="sobre" path="/sobre" />
        </div>
      </div>
      {props.children}
    </>
  )
}
