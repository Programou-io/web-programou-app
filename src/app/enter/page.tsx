'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'
import { Box } from 'programou/components/Box'
import { Button } from 'programou/components/Button'
import { CheckboxField } from 'programou/components/CheckboxField'
import { Logo } from 'programou/components/Logo'
import { OutsideHeading } from 'programou/components/OutsideHeading'
import { Text } from 'programou/components/Text'
import { TextField } from 'programou/components/TextField'
import { routes } from 'programou/constants/routes'
import { IoMdClose } from 'react-icons/io'

export default function EnterPage() {
  const router = useRouter()

  function backActionHandler() {
    router.push(routes.root.path)
  }

  function authenticateActionHandler() {
    router.push(routes.hub.path)
  }

  function recoveryPasswordActionHandler() {}

  function makeDialogComponent() {
    return (
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-80 fixed inset-0 ease-in-out duration-[0.2s]" />
        <Dialog.Content className="max-sm:w-full fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Box className="mx-4 max-w-[500px]">
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

            <TextField
              label="E-mail"
              type="email"
              placeholder="username@email.com"
            />

            <Dialog.DialogClose asChild>
              <Button onClick={recoveryPasswordActionHandler}>Recuperar</Button>
            </Dialog.DialogClose>
          </Box>
        </Dialog.Content>
      </Dialog.Portal>
    )
  }

  function makeTextFieldsSection() {
    return (
      <div className="grid gap-4">
        <TextField
          prefix="@"
          label="Nome de usuario"
          placeholder="seu-nome-de-usuario"
          type="email"
        />
        <TextField
          label="Senha"
          type="password"
          placeholder="Digite sua senha aqui ..."
        />
      </div>
    )
  }

  function makeRecoveryPasswordSection() {
    return (
      <>
        <Dialog.Trigger asChild>
          <button className="underline text-gray-400">
            Esqueceu sua senha?
          </button>
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
              href={routes.register.path}
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
      <div className="w-[550px] mt-36 max-sm:mt-10">
        <OutsideHeading
          title="Entre"
          description="Faça login e comece a usar!"
          onClick={backActionHandler}
        />

        <Box className="mt-5">
          <Logo className="flex items-center justify-center font-bold text-2xl" />

          <div className="grid gap-4">
            {makeTextFieldsSection()}

            <CheckboxField isActiveByDefault={true} label="Lembre-se de mim" />

            <Button variant="primary" onClick={authenticateActionHandler}>
              Entrar
            </Button>

            {makeLinksSection()}
          </div>
        </Box>
      </div>
    </div>
  )
}
