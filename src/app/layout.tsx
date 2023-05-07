export const metadata = {
  title: 'Programou',
  description: 'Plataforma de estudo de tecnologia FrontEnd, Bakcend e Mobile',
}

export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
