import { InputHTMLAttributes } from 'react'
import { Text } from './Text'
import { TextInput } from './TextInput'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  prefix?: string
  errorMessage?: string
}

export function TextField({ prefix, errorMessage, ...props }: TextFieldProps) {
  const isInvalid = errorMessage === null
  return (
    <div className="grid gap-2">
      <Text>{props.label}</Text>
      <TextInput prefix={prefix} isInvalid={isInvalid} {...props} />
    </div>
  )
}
