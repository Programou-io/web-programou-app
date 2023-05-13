import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

interface CheckboxFieldProps extends CheckboxProps {
  label: string
}

export function CheckboxField({ label, ...props }: CheckboxFieldProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox {...props} />
      <Text>{label}</Text>
    </div>
  )
}
