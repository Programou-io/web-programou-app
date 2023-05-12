import { HTMLAttributes } from 'react'

type BoxProps = HTMLAttributes<HTMLDivElement>

export function Box({ className, ...props }: BoxProps) {
  return (
    <div
      className={`bg-gray-800 rounded-md border border-gray-500 p-6 gap-6 grid ${className}`}
      {...props}
    >
      {props.children}
    </div>
  )
}
