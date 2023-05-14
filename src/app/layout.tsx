import React from 'react'
import './globals.css'

import { Footer } from 'programou/components/Footer'
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
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${firaCode.variable}`}>
      <body className="text-gray-100 bg-gray-900 font-default">
        <div>
          <div className="h-screen max-w-[1180px] mx-auto px-4">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
