import { Spinner } from '@chakra-ui/react'
import { HTMLAttributes } from 'react'

interface LoaderProps extends HTMLAttributes<HTMLElement> {
  size?: 'xl' | 'md' | 'sm' | 'lg' | 'xs'
  thickness?: string
}

export function Loader({ size, thickness, className, ...props }: LoaderProps) {
  return (
    <div className="flex items-center justify-center">
      <Spinner
        thickness={thickness}
        size={size}
        className={`text-turquoise-500 ${className}`}
        {...props}
      />
    </div>
  )
}
