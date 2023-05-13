'use client'

import { useRouter } from 'next/navigation'
import { BorderedList } from 'programou/components/BorderedList'
import { Button } from 'programou/components/Button'
import { FormStepPage } from 'programou/components/FormStepPage'
import { PROGRAMOU_APP_ROUTES } from 'programou/constants/routes'
import { BsArrowRight } from 'react-icons/bs'

export default function StacksPage() {
  const router = useRouter()
  const options = ['Web', 'Back-end', 'Mobile', 'DevOps', 'Embarcado']

  function onBackActionHandler() {
    router.push(PROGRAMOU_APP_ROUTES.PUBLIC.REGISTER_INFORMATIONS)
  }

  function onNextStepActionHandler() {
    router.push(PROGRAMOU_APP_ROUTES.PUBLIC.REGISTER_USER_DETAILS)
  }

  return (
    <FormStepPage
      title="Quase lá"
      description="Nos conte um pouco sobre quais temas você tem interesse."
      currentStep={3}
      totalSteps={4}
      onBackClick={onBackActionHandler}
    >
      <BorderedList options={options} />

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
