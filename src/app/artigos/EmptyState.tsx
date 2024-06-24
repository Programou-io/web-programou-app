import { Folder } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="grid gap-4 max-w-sm mx-auto mt-12">
      <Folder className="h-10 w-10" />
      <h2 className="font-bold text-xl">Nenhum resultado encontrado</h2>
      <p>
        Não encontrados um artigo relacioando a sua busca, tente buscar por
        outro termo.
      </p>
    </div>
  )
}
