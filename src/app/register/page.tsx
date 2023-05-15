'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'programou/components/Button'
import { Form } from 'programou/components/FormStepPage'
import { TextField } from 'programou/components/TextField'
import { routes } from 'programou/constants/routes'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const currentStep = 1
  const totalSteps = 4

  function onBackActionHandler() {
    router.push(routes.root.path)
  }

  function onNextStepActionHandler() {
    setIsLoading(true)
    router.push(routes.registerInformations.path)
  }

  return (
    <Form
      title="Bem-vindo"
      description="Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois."
      currentStep={currentStep}
      totalSteps={totalSteps}
      onBackClick={onBackActionHandler}
    >
      <TextField
        label="Nome completo"
        type="text"
        placeholder="Digite seu nome aqui ..."
      />
      <TextField
        label="Nome de usuario"
        prefix="@"
        type="email"
        placeholder="seu-usuario"
      />
      <TextField
        label="Senha"
        type="password"
        placeholder="Digite sua senha aqui ..."
      />

      <Button
        className="flex items-center justify-center p-4"
        variant="primary"
        isLoading={isLoading}
        disabled={isLoading}
        onClick={onNextStepActionHandler}
      >
        Proximo Passo
        <BsArrowRight size={24} />
      </Button>
    </Form>
  )
}
