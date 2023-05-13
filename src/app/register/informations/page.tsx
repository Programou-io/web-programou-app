'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'programou/components/Button'
import { FormStepPage } from 'programou/components/FormStepPage'
import { TextField } from 'programou/components/TextField'
import { PROGRAMOU_APP_ROUTES } from 'programou/constants/routes'
import { BsArrowRight } from 'react-icons/bs'

export default function InformationPage() {
  const router = useRouter()
  const currentStep = 2
  const totalSteps = 4

  function onBackActionHandler() {
    router.push(PROGRAMOU_APP_ROUTES.PUBLIC.REGISTER)
  }

  function onClickNextStepActionHandler() {
    router.push(PROGRAMOU_APP_ROUTES.PUBLIC.REGISTER_STACKS)
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
