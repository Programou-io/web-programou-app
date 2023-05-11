'use client'

import { Spinner, Tab, TabList, Tabs } from '@chakra-ui/react'
import { Logo } from 'programou/components/Logo'

import { useEffect, useRef, useState } from 'react'

export default function Hub() {
  const [isLoading, setIsLoading] = useState(true)
  const ref = useRef(null)
  useEffect(() => {
    import('@lottiefiles/lottie-player')
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [setIsLoading])

  return (
    <div className="h-screen max-w-[1180px] mx-auto px-4">
      <div className="font-bold flex justify-between  pt-12 pb-4">
        <Logo className="text-2xl" />

        <Tabs>
          <TabList>
            <Tab className="text-turquoise-500">Hub</Tab>
          </TabList>
        </Tabs>

        <div className="flex gap-2 items-center cursor-pointer ">
          <div className="bg-turquoise-500 rounded-md w-8 h-8"></div>
          <span>Paolo P. Lopes</span>
        </div>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center mt-72">
          <Spinner thickness="4px" size="xl" className="text-turquoise-500" />
        </div>
      )}

      {!isLoading && (
        <div className="flex items-center justify-center mt-28">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets4.lottiefiles.com/packages/lf20_rbpv9urtg6.json"
            style={{ width: '34rem' }}
          />
        </div>
      )}
    </div>
  )
}
