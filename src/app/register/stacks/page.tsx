'use client'

import { useRouter } from 'next/navigation'
import { BorderedList } from 'programou/components/BorderedList'
import { Button } from 'programou/components/Button'
import { FormStepPage } from 'programou/components/FormStepPage'
import { routes } from 'programou/constants/routes'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function StacksPage() {
  const router = useRouter()
  const [showLoader, setShowLoader] = useState<boolean>(false)

  const options = ['Web', 'Back-end', 'Mobile', 'DevOps', 'Embarcado']

  function onBackActionHandler() {
    router.push(routes.registerInformations.path)
  }

  function onNextStepActionHandler() {
    setShowLoader(true)
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
        isLoading={showLoader}
        disabled={showLoader}
        onClick={onNextStepActionHandler}
      >
        Proximo Passo
        <BsArrowRight size={24} />
      </Button>
    </FormStepPage>
  )
}
