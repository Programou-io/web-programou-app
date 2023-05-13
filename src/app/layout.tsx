'use client'

import React, { ReactNode } from 'react'
import { Providers } from '../providers/chackra-ui-providers'
import './globals.css'

import { usePathname, useRouter } from 'next/navigation'
import { Footer } from 'programou/components/Footer'
import { Header } from 'programou/components/Header'
import { routes } from 'programou/constants/routes'
import { firaCode, roboto } from 'programou/providers/next-font-providers'

export const metadata = {
  title: 'Programou',
  description: 'Plataforma de estudo de tecnologia FrontEnd, Bakcend e Mobile',
  subsets: ['latin'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  const route = useRouter()
  const childrenComponent = HeadingDecorator({
    push: route.push,
    children,
    path,
  })

  return (
    <html lang="pt-BR" className={`${roboto.variable} ${firaCode.variable}`}>
      <body className="text-gray-100 bg-gray-900 font-default">
        <Providers>{childrenComponent}</Providers>
      </body>
    </html>
  )
}

interface HeadingDecoratorProps {
  path: string | null
  push: (path: string) => void
  children: ReactNode
}

function HeadingDecorator(props: HeadingDecoratorProps) {
  function onProfileClickActionHandler() {
    props.push(routes.profile.path)
  }

  function hasHeader(route: string) {
    return routes.hub.path === route
  }

  function makeRouteWithHeader() {
    return (
      <div>
        <div className="max-w-[1180px] mx-auto px-4 bg-gray-900">
          <Header onProfileClick={onProfileClickActionHandler} />
          {props.children}
        </div>
        <Footer />
      </div>
    )
  }

  const path = props.path ?? routes.root.path
  return hasHeader(path) ? (
    makeRouteWithHeader()
  ) : (
    <div>
      <div className="h-screen max-w-[1180px] mx-auto px-4">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
