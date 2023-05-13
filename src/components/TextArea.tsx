import { TextareaHTMLAttributes } from 'react'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>
export function TextArea(props: TextAreaProps) {
  return (
    <div className="focus-within:border-turquoise-500 border rounded-md overflow-hidden min-h-[120px] bg-gray-900 border-gray-900">
      <textarea
        className="bg-gray-900 w-full min-h-full text-left outline-none p-6"
        {...props}
      />
    </div>
  )
}
