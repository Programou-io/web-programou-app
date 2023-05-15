'use client'

import { ButtonHTMLAttributes } from 'react'
import { Loader } from './Loader'

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'none'
  isLoading?: boolean
}

export function Button({
  variant = 'primary',
  isLoading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const commonStyle = `font-bold gap-2 disabled:cursor-not-allowed duration-[0.15s] rounded-md w-full px-6 py-2`

  if (variant === 'primary') {
    const variantStyle =
      'bg-turquoise-500 enabled:hover:bg-turquoise-300 disabled:bg-turquoise-700 '
    return (
      <button
        className={`invalid:bg-turquoise-500 ${commonStyle} ${variantStyle} ${className}`}
        {...props}
      >
        {isLoading ? <Loader size="md" className="text-white" /> : children}
      </button>
    )
  } else if (variant === 'secondary') {
    const variantStyle =
      'enabled:hover:bg-turquoise-500 border-2 text-turquoise-500 enabled:hover:text-white border-turquoise-500'
    return (
      <button
        disabled={isLoading || props.disabled}
        className={`${commonStyle} ${variantStyle} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader size="md" className="text-turquoise-500" />
        ) : (
          children
        )}
      </button>
    )
  } else {
    return <button {...props}>{children}</button>
  }
}
