'use client'

import { useRouter } from 'next/navigation'
import { Logo } from 'programou/components/Logo'
import { PrimaryButton } from 'programou/components/PrimaryButton'
import { Heading, Text } from 'programou/components/Text'
import { TextInput } from 'programou/components/TextArea'
import { useState } from 'react'
import { BsArrowLeft, BsCheckLg } from 'react-icons/bs'

interface TextFieldProps {
  label: string
  prefix?: string
}

function TextField(props: TextFieldProps) {
  return (
    <div className="grid gap-2">
      <Text>{props.label}</Text>
      <TextInput prefix={props.prefix} />
    </div>
  )
}

interface CheckboxProps {
  onChangeState?: (isCheked: boolean) => void
}

function Checkbox({ onChangeState = () => {} }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(true)

  function onClickActionHandler() {
    const newState = !isChecked
    setIsChecked(newState)
    onChangeState(newState)
  }

  return (
    <button
      onClick={onClickActionHandler}
      className={`flex items-center justify-center w-6 h-6 rounded-md border-2 overflow-hidden ${
        isChecked &&
        'bg-turquoise-500 border-turquoise-500 ease-in-out duration-[0.2s]'
      }`}
    >
      <BsCheckLg
        className={`${
          isChecked
            ? 'ease-in duration-[0.2s]'
            : '-translate-y-6 ease-out duration-[0.2s]'
        }`}
      />
    </button>
  )
}

export default function EnterPage() {
  const router = useRouter()

  function backActionHandler() {
    router.push('/')
  }

  function authenticateActionHandler() {
    router.push('/hub')
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[550px] mt-36">
        <div className="px-4">
          <button onClick={backActionHandler}>
            <BsArrowLeft size={24} />
          </button>
          <Heading className="text-2xl">Entre</Heading>
          <Text className="text-gray-400">Faça login e comece a usar!</Text>
        </div>

        <div className="bg-gray-800 rounded-md border border-gray-500 p-6 gap-6 grid mt-5">
          <Logo className="flex items-center justify-center font-bold text-2xl" />

          <div className="grid gap-4">
            <div className="grid gap-4">
              <TextField prefix="@" label="Nome de usuario" />
              <TextField label="Senha" />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox />
              <Text>Lembre-se de min</Text>
            </div>

            <PrimaryButton onClick={authenticateActionHandler}>
              Entrar
            </PrimaryButton>

            <div className="text-center grid gap-2">
              <Text>
                <a className="underline" href="/recuperar-conta">
                  Esqueceu sua senha?
                </a>
              </Text>
              <Text>
                Não possui conta?{' '}
                <a
                  className="underline font-bold text-turquoise-500"
                  href="/register"
                >
                  Crie uma agora!
                </a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
