'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'
import { Box } from 'programou/components/Box'
import { Checkbox } from 'programou/components/Checkbox'
import { Heading } from 'programou/components/Heading'
import { Logo } from 'programou/components/Logo'
import { PrimaryButton } from 'programou/components/PrimaryButton'
import { Text } from 'programou/components/Text'
import { TextField } from 'programou/components/TextField'
import { BsArrowLeft } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

export default function EnterPage() {
  const router = useRouter()

  function backActionHandler() {
    router.push('/')
  }

  function authenticateActionHandler() {
    router.push('/hub')
  }

  function recoveryPasswordActionHandler() {}

  function makeDialogComponent() {
    return (
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-80 fixed inset-0 ease-in-out duration-[0.2s]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Box>
            <Dialog.DialogClose asChild>
              <IoMdClose size={32} className="cursor-pointer" />
            </Dialog.DialogClose>
            <Dialog.Title className="text-white text-2xl font-bold">
              Recupere sua senha
            </Dialog.Title>
            <Dialog.Description className="text-gray-200 text-lg">
              Caso tenha perdido seu acesso você pode recupera-lo com seu email
              informado no momento da criação da conta.
            </Dialog.Description>

            <TextField label="E-mail" placeholder="username@email.com" />

            <Dialog.DialogClose asChild>
              <PrimaryButton onClick={recoveryPasswordActionHandler}>
                Recuperar
              </PrimaryButton>
            </Dialog.DialogClose>
          </Box>
        </Dialog.Content>
      </Dialog.Portal>
    )
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

  function makeRecoveryPasswordSection() {
    return (
      <>
        <Dialog.Trigger asChild>
          <button className="underline">Esqueceu sua senha?</button>
        </Dialog.Trigger>
        {makeDialogComponent()}
      </>
    )
  }

  function makeLinksSection() {
    return (
      <Dialog.Root>
        <div className="text-center grid gap-2">
          {makeRecoveryPasswordSection()}
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
      </Dialog.Root>
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
