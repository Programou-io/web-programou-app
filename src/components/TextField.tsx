import { HTMLAttributes } from 'react'
import { Text } from './Text'
import { TextInput } from './TextInput'

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  label: string
  prefix?: string
}

export function TextField({ prefix, ...props }: TextFieldProps) {
  return (
    <div className="grid gap-2">
      <Text>{props.label}</Text>
      <TextInput prefix={prefix} {...props} />
    </div>
  )
}
