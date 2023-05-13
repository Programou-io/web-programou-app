'use client'

import { useRouter } from 'next/navigation'
import { FormStepPage } from 'programou/app/register/components/FormStepPage'
import { BorderedList } from 'programou/components/BorderedList'
import { Button } from 'programou/components/Button'
import { routes } from 'programou/constants/routes'
import { BsArrowRight } from 'react-icons/bs'

export default function StacksPage() {
  const router = useRouter()
  const options = ['Web', 'Back-end', 'Mobile', 'DevOps', 'Embarcado']

  function onBackActionHandler() {
    router.push(routes.registerInformations.path)
  }

  function onNextStepActionHandler() {
    router.push(routes.registerUserDetails.path)
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
