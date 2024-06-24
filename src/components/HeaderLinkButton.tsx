'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { analyticsClient } from 'programou/utils/firebase/client'

interface HeaderLinkButtonProps {
  name: string
  path: string
}

export function HeaderLinkButton(props: HeaderLinkButtonProps) {
  const pathname = usePathname()

  const isCurrentRoute = props.path === pathname

  function clickActionHandler() {
    analyticsClient.trackClick({
      item: `nav:link:${props.name.toLowerCase()}`,
    })
  }

  return (
    <Link
      href={props.path}
      className={`${isCurrentRoute ? 'text-white' : 'text-gray-400'} ${
        isCurrentRoute ? 'font-extrabold' : 'font-regular'
      }`}
      onClick={clickActionHandler}
    >
      {props.name}
    </Link>
  )
}
