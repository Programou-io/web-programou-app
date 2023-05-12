'use client'

import { useRouter } from 'next/navigation'
import { Box } from 'programou/components/Box'
import { Checkbox } from 'programou/components/Checkbox'
import { Heading } from 'programou/components/Heading'
import { Logo } from 'programou/components/Logo'
import { PrimaryButton } from 'programou/components/PrimaryButton'
import { Text } from 'programou/components/Text'
import { TextField } from 'programou/components/TextField'
import { BsArrowLeft } from 'react-icons/bs'

export default function EnterPage() {
  const router = useRouter()

  function backActionHandler() {
    router.push('/')
  }

  function authenticateActionHandler() {
    router.push('/hub')
  }

  function makeBoxHeaderSection() {
    return (
      <div className="px-4">
        <button onClick={backActionHandler}>
          <BsArrowLeft size={24} />
        </button>
        <Heading className="text-2xl">Entre</Heading>
        <Text className="text-gray-400">Faça login e comece a usar!</Text>
      </div>
    )
  }

  function makeTextFieldsSection() {
    return (
      <div className="grid gap-4">
        <TextField prefix="@" label="Nome de usuario" />
        <TextField label="Senha" />
      </div>
    )
  }

  function makeCheckboxSection() {
    return (
      <div className="flex items-center gap-2">
        <Checkbox />
        <Text>Lembre-se de min</Text>
      </div>
    )
  }

  function makeLinksSection() {
    return (
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
    )
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[550px] mt-36">
        {makeBoxHeaderSection()}

        <Box className="mt-5">
          <Logo className="flex items-center justify-center font-bold text-2xl" />

          <div className="grid gap-4">
            {makeTextFieldsSection()}
            {makeCheckboxSection()}

            <PrimaryButton onClick={authenticateActionHandler}>
              Entrar
            </PrimaryButton>

            {makeLinksSection()}
          </div>
        </Box>
      </div>
    </div>
  )
}
