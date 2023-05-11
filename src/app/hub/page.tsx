'use client'

import { Spinner, Tab, TabList, Tabs } from '@chakra-ui/react'
import { Logo } from 'programou/components/Logo'

import { HTMLAttributes, useEffect, useRef, useState } from 'react'

type TextProps = HTMLAttributes<HTMLParagraphElement>

function Text(props: TextProps) {
  return <p {...props} />
}

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
    <div className="max-w-[1180px] mx-auto px-4 bg-gray-900">
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
        <div className="flex items-center justify-center mt-14">
          <div>
            <div className='flex items-center justify-center'>
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

            <div className='flex items-center justify-center  mb-12'>
              <div className='bg-gray-800 rounded-md border border-gray-500 p-6 gap-4 grid'>
                <div className='focus-within:border-turquoise-500 border rounded-md overflow-hidden min-h-[120px] bg-gray-900 p-6 border-gray-900'>
                  <input className='bg-gray-900 w-full text-left outline-none' />
                </div>

                <Text className='text-gray-400 text-sm'>Essa funcionaliadde ainda está em desenvolvimento, mas voce pode contruibuir com uma sugestão.</Text>

                <button className='bg-turquoise-700 rounded-md py-4 px-6 w-full'>Sugerir</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
