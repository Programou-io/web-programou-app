'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searchSchema = z.object({
  query: z.string(),
})

export type SearchForm = z.infer<typeof searchSchema>

interface SeachInputFieldProps {
  onSubmit(search: SearchForm): void
}

export function SeachInputField(props: SeachInputFieldProps) {
  const { register, handleSubmit, reset } = useForm<SearchForm>({
    resolver: zodResolver(searchSchema),
  })

  function submitButtonActionHandler(search: SearchForm) {
    props.onSubmit(search)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(submitButtonActionHandler)}
      className="flex gap-2  max-w-lg mx-auto transition-all"
    >
      <div className="p-2 flex gap-2 border-gray-200 border-2 rounded-lg">
        <input
          {...register('query')}
          type="text"
          placeholder="Busque conteudo"
          className="bg-transparent outline-none"
        />
      </div>
      <button
        type="submit"
        className="transition-colors p-2 mx-auto flex gap-2 border-gray-200 text-gray-200 border-2 rounded-lg max-w-md hover:border-gray-100 hover:text-gray-100"
      >
        <Search />
      </button>
    </form>
  )
}
