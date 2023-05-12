import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'none'
}

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const commonStyle =
    'font-bold gap-2 disabled:cursor-not-allowed duration-[0.2s] rounded-md w-full px-6 py-2'

  if (variant === 'primary') {
    const variantStyle =
      'hover:bg-turquoise-300 bg-turquoise-500 disabled:bg-turquoise-700'
    return (
      <button
        className={`${commonStyle} ${variantStyle} ${className}`}
        {...props}
      />
    )
  } else if (variant === 'secondary') {
    const variantStyle =
      'hover:bg-turquoise-500 hover:text-white border-2 text-turquoise-500 border-turquoise-500'
    return (
      <button
        className={`${commonStyle} ${variantStyle} ${className}`}
        {...props}
      />
    )
  } else {
    return <button {...props} />
  }
}
