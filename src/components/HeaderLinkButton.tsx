'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderLinkButtonProps {
  name: string
  path: string
}

export function HeaderLinkButton(props: HeaderLinkButtonProps) {
  const pathname = usePathname()

  const isCurrentRoute = props.path === pathname

  return (
    <Link
      href={props.path}
      className={`${isCurrentRoute ? 'text-white' : 'text-gray-400'} ${
        isCurrentRoute ? 'font-extrabold' : 'font-regular'
      }`}
    >
      {props.name}
    </Link>
  )
}
