import { ButtonHTMLAttributes } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Button } from './Button'
import { Heading } from './Heading'
import { Text } from './Text'

interface OutsideHeadingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  description: string
}

export function OutsideHeading({
  title,
  description,
  ...props
}: OutsideHeadingProps) {
  return (
    <div className="px-4">
      <Button variant="none" {...props}>
        <BsArrowLeft size={24} />
      </Button>
      <Heading className="text-2xl">{title}</Heading>
      <Text className="text-gray-400">{description}</Text>
    </div>
  )
}
