import { HTMLAttributes } from 'react'
import { Box } from './Box'
import { MultiStep } from './MultiStep'
import { OutsideHeading } from './OutsideHeading'

interface FormStepPageProps extends HTMLAttributes<HTMLElement> {
  title: string
  description: string
  currentStep?: number
  totalSteps?: number
  onBackClick: () => void
}

export function Form({
  title,
  description,
  onBackClick,
  currentStep,
  totalSteps,
  ...props
}: FormStepPageProps) {
  return (
    <div className="max-w-[550px] max-sm:mt-10 mx-auto gap-2 grid">
      <div>
        <OutsideHeading
          title={title}
          description={description}
          onClick={onBackClick}
        />
      </div>

      {!!(currentStep && totalSteps) && (
        <MultiStep current={currentStep} total={totalSteps} className="p-2" />
      )}

      <div>
        <Box {...props} />
      </div>
    </div>
  )
}
