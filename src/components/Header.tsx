import Image from 'next/image'
import Link from 'next/link'
import { HeaderLinkButton } from './HeaderLinkButton'

import logoImagePath from '../app/LogoImage.png'

export function Header() {
  return (
    <div className="w-full flex justify-between items-center m-auto max-w-3xl my-4 max-md:px-4">
      <h1 className="font-extrabold text-lg">
        <Link href="/" className="flex gap-2 text-white items-center">
          <Image alt="logo" src={logoImagePath} className="h-8 w-8" />
          Programou
        </Link>
      </h1>
      <div className="flex gap-4">
        <HeaderLinkButton name="inicío" path="/" />
        <HeaderLinkButton name="sobre" path="/sobre" />
      </div>
    </div>
  )
}
