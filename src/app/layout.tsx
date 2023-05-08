import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Programou',
  description: 'Plataforma de estudo de tecnologia FrontEnd, Bakcend e Mobile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="text-gray-100 bg-gray-800 font-sans">{children}</body>
    </html>
  )
}
