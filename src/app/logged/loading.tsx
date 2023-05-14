'use client'

import { Loader } from 'programou/components/Loader'

export default function Loading() {
  return (
    <div className="h-screen">
      <Loader size="xl" thickness="4px" className="mt-72" />
    </div>
  )
}
