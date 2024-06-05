import Link from 'next/link'
import { HeaderLinkButton } from './HeaderLinkButton'

export function Header() {
  return (
    <div className="w-full flex justify-between items-center m-auto max-w-3xl my-4">
      <h1 className="font-extrabold text-lg">
        <Link href="/">programou</Link>
      </h1>
      <div className="flex gap-4">
        <HeaderLinkButton name="inicío" path="/" />
        <HeaderLinkButton name="sobre" path="/sobre" />
      </div>
    </div>
  )
}
