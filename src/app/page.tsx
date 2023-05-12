'use client'

import Image from 'next/image'
import { PrimaryButton } from 'programou/components/PrimaryButton'
import { Text } from 'programou/components/Text'

import { BsGithub, BsYoutube } from 'react-icons/bs'

import { useRouter } from 'next/navigation'
import { Heading } from 'programou/components/Heading'
import { Logo } from 'programou/components/Logo'
import programouIcon from '../assets/programou-icon.png'

export default function Home() {
  const router = useRouter()

  function registerActionHandler() {
    router.push('/register')
  }

  function makeSocialBadges() {
    return (
      <div className="gap-4 grid grid-flow-row grid-cols-2">
        <a
          href="https://www.youtube.com/@programou"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube size={32} />
        </a>
        <a
          href="https://github.com/Programou-io"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={32} />
        </a>
      </div>
    )
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
        <PrimaryButton onClick={registerActionHandler} className="sm:w-fit">
          Criar conta
        </PrimaryButton>
      </div>
    )
  }

  return (
    <div className="h-full">
      <div className="mt-10 font-bold text-4xl flex items-center justify-between">
        <Logo className="max-sm:text-2xl" />
        {makeSocialBadges()}
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
