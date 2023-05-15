'use client'

import { useRouter } from 'next/navigation'
import { Form } from 'programou/components/FormStepPage'
import { Logo } from 'programou/components/Logo'
import { routes } from 'programou/constants/routes'
import { useState } from 'react'

import { useToast } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import { Button } from 'programou/components/Button'
import { Text } from 'programou/components/Text'
import { BsGithub, BsGoogle } from 'react-icons/bs'

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

    setEmail('')
    setPassword('')
    setIsAuthenticating(false)
  }

  return (
    <div className="mt-20 h-screen">
      <Form
        title="Entre"
        description="Faça login e comece a usar!"
        onBackClick={backActionHandler}
      >
        <Logo className="flex items-center justify-center font-bold text-2xl" />
        <div className="grid gap-2">
          <Button variant="secondary" className="flex items-center py-4">
            <BsGoogle size={24} />
            <Text>Entrar com conta google</Text>
          </Button>
          <Button
            variant="secondary"
            className="flex items-center py-4"
            onClick={() => signIn('github')}
          >
            <BsGithub size={24} />
            <Text>Entrar com Github</Text>
          </Button>
          <Button
            variant="secondary"
            className="flex items-center justify-center"
            onClick={() => router.push(routes.enterWithCredentials.path)}
          >
            <Text>Entrat com suas credenciais</Text>
          </Button>
        </div>
      </Form>
    </div>
  )
}
