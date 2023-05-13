'use client'

import { useRouter } from 'next/navigation'
import { FormStepPage } from 'programou/app/register/components/FormStepPage'
import { Button } from 'programou/components/Button'
import { TextField } from 'programou/components/TextField'
import { routes } from 'programou/constants/routes'
import { BsArrowRight } from 'react-icons/bs'

export default function InformationPage() {
  const router = useRouter()
  const currentStep = 2
  const totalSteps = 4

  function onBackActionHandler() {
    router.push(routes.register.path)
  }

  function onClickNextStepActionHandler() {
    router.push(routes.registerStacks.path)
  }

  return (
    <FormStepPage
      title="Informe seus dados"
      description="Precisamos de mais algumas informações para criar seu perfil! Ah, você pode editar essas informações depois."
      currentStep={currentStep}
      totalSteps={totalSteps}
      onBackClick={onBackActionHandler}
    >
      <TextField
        label="E-mal"
        type="email"
        placeholder="Digite seu nome aqui ..."
      />
      <TextField
        className="dark:text-white"
        label="Data de nascimento"
        placeholder="dd/mm/yyyy"
        type="text"
      />

      <Button
        className="flex items-center justify-center p-4"
        variant="primary"
        onClick={onClickNextStepActionHandler}
      >
        Proximo Passo
        <BsArrowRight size={24} />
      </Button>
    </FormStepPage>
  )
}
