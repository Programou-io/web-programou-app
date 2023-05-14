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
        className={`h-1 w-full rounded-sm mx-1 overflow-hidden ${
          isActive ? 'bg-turquoise-500' : 'bg-gray-500'
        }`}
      />
    )
  }

  return (
    <div className="py-2 grid gap-1">
      <Text className="px-2 text-sm text-gray-400">
        Passo {current} de {total}
      </Text>
      <div className={String(`flex`)}>
        {Array.from({ length: total }, (_, index) => index++).map((step) => {
          return makeStep(current, step)
        })}
      </div>
    </div>
  )
}
