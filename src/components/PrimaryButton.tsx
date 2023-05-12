import { ButtonHTMLAttributes } from 'react'

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLElement>

export function PrimaryButton({ className, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={`hover:bg-turquoise-300 bg-turquoise-500 font-bold rounded-md py-4 px-6 w-full disabled:bg-turquoise-700 disabled:cursor-not-allowed" ${className}`}
      {...props}
    />
  )
}

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLElement>

export function SecondaryButton({ className, ...props }: SecondaryButtonProps) {
  return (
    <button
      className={`hover:bg-turquoise-500 hover:text-white duration-[0.2s] border-2 text-turquoise-500 py-1.5 border-turquoise-500 font-bold gap-2 rounded-md px-6 w-full disabled:bg-turquoise-700 disabled:cursor-not-allowed" ${className}`}
      {...props}
    />
  )
}
