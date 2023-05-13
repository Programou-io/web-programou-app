import { HTMLAttributes } from 'react'
import { Text } from './Text'
interface MultiStepProps extends HTMLAttributes<HTMLDivElement> {
  current: number
  total: number
}

export function MultiStep({ current, total, ...props }: MultiStepProps) {
  function makeStep(current: number, step: number) {
    const isActive = current - 1 >= step
    return (
      <div
        key={step}
        className={`h-1 rounded-sm overflow-hidden ${
          isActive ? 'bg-turquoise-500' : 'bg-gray-500'
        }`}
      />
    )
  }

  return (
    <div className="p-2 grid gap-1">
      <Text className="text-sm text-gray-400">
        Passo {current} de {total}
      </Text>
      <div className={`grid grid-cols-4 gap-2`}>
        {Array.from({ length: total }, (_, index) => index++).map((step) => {
          return makeStep(current, step)
        })}
      </div>
    </div>
  )
}