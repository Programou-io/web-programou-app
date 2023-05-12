import { Text } from './Text'
import { TextInput } from './TextInput'

interface TextFieldProps {
  label: string
  prefix?: string
}

export function TextField(props: TextFieldProps) {
  return (
    <div className="grid gap-2">
      <Text>{props.label}</Text>
      <TextInput prefix={props.prefix} />
    </div>
  )
}
