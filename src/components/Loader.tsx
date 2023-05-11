import { Spinner } from '@chakra-ui/react'

export function Loader() {
  return (
    <div className="flex items-center justify-center mt-72">
      <Spinner thickness="4px" size="xl" className="text-turquoise-500" />
    </div>
  )
}