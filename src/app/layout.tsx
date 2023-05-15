'use client'

import { Footer } from 'programou/components/Footer'
import { firaCode, roboto } from 'programou/providers/next-font-providers'
import React from 'react'
import { Providers } from '../providers/chackra-ui-providers'
import './globals.css'

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
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${firaCode.variable}`}>
      <body className="text-gray-100 bg-gray-900 font-default">
        <Providers>
          <div className="max-w-[1180px] mx-auto px-4">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
