import { ButtonHTMLAttributes } from 'react'

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLElement>
export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      className="bg-turquoise-500 font-bold rounded-md py-4 px-6 w-full disabled:bg-turquoise-700 disabled:cursor-not-allowed"
      {...props}
    />
  )
}
