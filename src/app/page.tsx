'use client'

import Image from 'next/image'
import { Button } from 'programou/components/Button'
import { Text } from 'programou/components/Text'

import { BsFillPersonFill } from 'react-icons/bs'

import { useRouter } from 'next/navigation'
import { Heading } from 'programou/components/Heading'
import { Logo } from 'programou/components/Logo'
import programouIcon from '../assets/programou-icon.png'

export default function Home() {
  const router = useRouter()

  function registerActionHandler() {
    router.push('/register')
  }

  function makeHeroTextSection() {
    return (
      <div className="grid gap-4 max-w-[480px] sm:translate-x-10 max-sm:text-center">
        <Heading className="max-sm:text-4xl text-6xl">
          Descomplique a<br />
          programação
        </Heading>
        <Text className="text-xl text-gray-400 max-sm:text-lg">
          Crie sua conta onde suas ideias podem se transformar em códigos
          poderosos.
        </Text>
        <Button
          variant="primary"
          onClick={registerActionHandler}
          className="sm:w-fit"
        >
          Criar conta
        </Button>
      </div>
    )
  }

  return (
    <div className="h-full">
      <div className="mt-10 font-bold text-4xl flex items-center justify-between">
        <Logo className="max-sm:text-2xl" />

        <div className="flex items-center">
          <Button
            variant="secondary"
            className="text-sm flex items-center justify-center"
          >
            <BsFillPersonFill size={24} />
            Entrar
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center mt-28 max-sm:mt-48">
        {makeHeroTextSection()}
        <Image
          className="sm:-translate-x-10 max-sm:hidden"
          src={programouIcon}
          height={500}
          alt=""
        />
      </div>
    </div>
  )
}
