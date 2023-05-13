'use client'

import { useRouter } from 'next/navigation'
import { FormStepPage } from 'programou/app/register/components/FormStepPage'
import { Button } from 'programou/components/Button'
import { TextField } from 'programou/components/TextField'
import { routes } from 'programou/constants/routes'
import { BsArrowRight } from 'react-icons/bs'

export default function RegisterPage() {
  const router = useRouter()
  const currentStep = 1
  const totalSteps = 4

  function onBackActionHandler() {
    router.push(routes.root.path)
  }

  function onNextStepActionHandler() {
    router.push(routes.registerInformations.path)
  }

  return (
    <FormStepPage
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
        onClick={onNextStepActionHandler}
      >
        Proximo Passo
        <BsArrowRight size={24} />
      </Button>
    </FormStepPage>
  )
}
