'use client'
// import { Logo } from 'programou/components/Logo'

import Image from 'next/image'
import { PrimaryButton } from 'programou/components/PrimaryButton'
import { Heading, Text } from 'programou/components/Text'

// import { AiFillNotification } from 'react-icons/ai'
import { BsGithub, BsYoutube } from 'react-icons/bs'

import { Logo } from 'programou/components/Logo'
import programouIcon from '../assets/programou-icon.png'

export default function Home() {
  return (
    <div className="h-full">
      <div className="mt-10 font-bold text-4xl flex items-center justify-between">
        <Logo className="max-sm:text-2xl" />

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
      </div>

      <div className="flex items-center justify-center mt-28 max-sm:mt-48">
        <div className="grid gap-4 max-w-[480px] sm:translate-x-10 max-sm:text-center">
          <Heading className="max-sm:text-4xl">
            Descomplique a<br />
            programação
          </Heading>
          <Text className="text-xl text-gray-400 max-sm:text-lg">
            Crie sua conta onde suas ideias podem se transformar em códigos
            poderosos.
          </Text>
          <PrimaryButton className="sm:w-fit">Criar conta</PrimaryButton>
        </div>

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
