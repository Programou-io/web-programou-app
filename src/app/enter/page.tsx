'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'
import { Box } from 'programou/components/Box'
import { Button } from 'programou/components/Button'
import { CheckboxField } from 'programou/components/CheckboxField'
import { Form } from 'programou/components/FormStepPage'
import { Logo } from 'programou/components/Logo'
import { Text } from 'programou/components/Text'
import { TextField } from 'programou/components/TextField'
import { routes } from 'programou/constants/routes'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import { useToast } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'

export default function EnterPage() {
  const router = useRouter()
  const toast = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false)

  function backActionHandler() {
    router.push(routes.root.path)
  }

  async function authenticateActionHandler() {
    setIsAuthenticating(true)

    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
    console.log(response)

    if (response?.ok) {
      toast({
        title: 'Sucesso',
        description: 'Login autenticado com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      router.push(routes.hub.path)
    } else {
      toast({
        title: 'Erro',
        description: 'Usuario ou senha invalidos, tente novamente',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    setIsAuthenticating(false)
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
              <Button variant="primary" onClick={recoveryPasswordActionHandler}>
                Recuperar
              </Button>
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
          label="Email"
          placeholder="seu-nome-de-usuario"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          placeholder="Digite sua senha aqui ..."
          value={password}
          onChange={({ target }) => setPassword(target.value)}
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
    <div className="mt-36 h-screen">
      <Form
        title="Entre"
        description="Faça login e comece a usar!"
        onBackClick={backActionHandler}
      >
        <Logo className="flex items-center justify-center font-bold text-2xl" />

        <div className="grid gap-4">
          {makeTextFieldsSection()}

          <CheckboxField isActiveByDefault={true} label="Lembre-se de mim" />

          <Button
            variant="primary"
            isLoading={isAuthenticating}
            disabled={isAuthenticating}
            onClick={authenticateActionHandler}
          >
            Entrar
          </Button>

          {makeLinksSection()}
        </div>
      </Form>
    </div>
  )
}
