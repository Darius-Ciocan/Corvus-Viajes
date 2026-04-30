import { RefreshCcw } from 'lucide-react'

interface ErrorStateProps {
  message: string
  onRetry?: () => void
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="page-shell py-12">
      <div className="rounded-md border border-red-200 bg-red-50 p-5 text-red-900">
        <p className="font-bold">No se pudieron cargar los datos</p>
        <p className="mt-1 text-sm">{message}</p>
        {onRetry && (
          <button
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-red-900 px-4 py-2 text-sm font-bold text-white"
            onClick={onRetry}
          >
            <RefreshCcw size={16} aria-hidden="true" />
            Reintentar
          </button>
        )}
      </div>
    </div>
  )
}
