import React from 'react'
import './globals.css'

// eslint-disable-next-line camelcase
import { Fira_Code, Roboto } from 'next/font/google'
import { Header } from 'programou/components/Header'

const roboto = Roboto({
  variable: '--font-default',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})
const firaCode = Fira_Code({
  variable: '--font-mono',
  subsets: ['latin'],
})

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
      <body className="text-gray-100 bg-gray-800 font-default">
        <Header>{children}</Header>
      </body>
    </html>
  )
}
