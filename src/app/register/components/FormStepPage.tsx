import { HTMLAttributes } from 'react'
import { Box } from '../../../components/Box'
import { MultiStep } from '../../../components/MultiStep'
import { OutsideHeading } from '../../../components/OutsideHeading'

interface FormStepPageProps extends HTMLAttributes<HTMLElement> {
  title: string
  description: string
  currentStep: number
  totalSteps: number
  onBackClick: () => void
}

export function FormStepPage({
  title,
  description,
  onBackClick,
  currentStep,
  totalSteps,
  ...props
}: FormStepPageProps) {
  return (
    <div className="w-[550px] mt-36 mx-auto gap-2 grid">
      <div>
        <OutsideHeading
          title={title}
          description={description}
          onClick={onBackClick}
        />
      </div>

      <MultiStep current={currentStep} total={totalSteps} className="p-2" />

      <div>
        <Box {...props} />
      </div>
    </div>
  )
}
