'use client'

import { useRouter } from 'next/navigation'
import { Header } from 'programou/components/Header'
import { routes } from 'programou/constants/routes'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter()

  function onProfileClickActionHandler() {
    router.push(routes.profile.path)
  }

  return (
    <div>
      <Header onProfileClick={onProfileClickActionHandler} />
      {children}
    </div>
  )
}
