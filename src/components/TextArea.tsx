import { HTMLAttributes } from 'react'

type TextAreaProps = HTMLAttributes<HTMLInputElement>
export function TextArea(props: TextAreaProps) {
  return (
    <div className="focus-within:border-turquoise-500 border rounded-md overflow-hidden min-h-[120px] bg-gray-900 p-6 border-gray-900">
      <input className="bg-gray-900 w-full text-left outline-none" {...props} />
    </div>
  )
}
