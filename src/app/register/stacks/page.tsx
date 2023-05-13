'use client'

import { Button } from 'programou/components/Button'
import { FormStepPage } from 'programou/components/FormStepPage'
import { BsArrowRight } from 'react-icons/bs'

export default function StacksPage() {
  function onBackActionHandler() {}
  return (
    <FormStepPage
      title="Quase lá"
      description="Nos conte um pouco sobre quais temas você tem interesse."
      currentStep={3}
      totalSteps={4}
      onBackClick={onBackActionHandler}
    >
      <Button
        className="flex items-center justify-center p-4"
        variant="primary"
      >
        Proximo Passo
        <BsArrowRight size={24} />
      </Button>
    </FormStepPage>
  )
}
