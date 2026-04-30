import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { DestinationCard } from '../components/DestinationCard'
import { ErrorState } from '../components/ErrorState'
import { LoadingState } from '../components/LoadingState'
import { useDestinations } from '../hooks/useDestinations'

export default function DestinationsPage() {
  const { destinations, isLoading, error } = useDestinations()
  const [query, setQuery] = useState('')

  const filteredDestinations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) return destinations

    return destinations.filter((destination) =>
      [destination.name, destination.country, ...destination.tags]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    )
  }, [destinations, query])

  if (isLoading) return <LoadingState label="Buscando catalogo de destinos" />
  if (error) return <ErrorState message={error} />

  return (
    <section className="page-shell py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase text-emerald-800">Catalogo</p>
          <h1 className="text-4xl font-black text-stone-950">Destinos Corvus</h1>
          <p className="mt-3 max-w-2xl text-stone-600">
            Filtra por pais, estilo de viaje o etiqueta para encontrar una propuesta inicial.
          </p>
        </div>
        <label className="relative block w-full md:w-80">
          <Search className="absolute left-3 top-3.5 text-stone-500" size={18} />
          <input
            className="w-full rounded-md border border-stone-300 bg-white py-3 pl-10 pr-3"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar destino"
          />
        </label>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  )
}
