export function LoadingState({ label = 'Cargando datos' }: { label?: string }) {
  return (
    <div className="page-shell py-16">
      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div className="h-full w-1/3 animate-pulse rounded-full bg-emerald-800" />
      </div>
      <p className="mt-4 text-sm font-semibold text-stone-600">{label}</p>
    </div>
  )
}
