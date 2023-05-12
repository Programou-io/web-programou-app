import { HTMLAttributes } from 'react'
import { Text } from './Text'

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  prefix?: string
}

export function TextInput({ prefix = '', ...props }: TextInputProps) {
  return (
    <div className="p-4 flex items-center focus-within:border-turquoise-500 border rounded-md overflow-hidden bg-gray-900 border-gray-900">
      {prefix.length > 0 && (
        <Text className="text-gray-500 pr-2">{prefix}</Text>
      )}
      <input className="bg-gray-900 w-full text-left outline-none" {...props} />
    </div>
  )
}
