'use client'

import { Spinner, Tab, TabList, Tabs } from '@chakra-ui/react'
import { Logo } from 'programou/components/Logo'

import { useEffect, useRef, useState } from 'react'

export default function Hub() {
  const [animation, setAnimation] = useState<Object | null>(null)
  const ref = useRef(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://assets4.lottiefiles.com/packages/lf20_rbpv9urtg6.json") 
      const data = await response.json()

      setAnimation(data)
    }


    import('@lottiefiles/lottie-player')
    fetchData()
  }, [setAnimation])

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

      {(animation === null) && (
        <div className="flex items-center justify-center mt-72">
          <Spinner thickness="4px" size="xl" className="text-turquoise-500" />
        </div>
      )}

      {(setAnimation !== null) && (
        <div className="flex items-center justify-center mt-28">
          <lottie-player
            id="typing-lottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src={JSON.stringify(animation)}
            style={{ width: '34rem' }}
          />
        </div>
      )}
    </div>
  )
}
