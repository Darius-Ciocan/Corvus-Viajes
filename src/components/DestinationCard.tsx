import { Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBookingContext } from '../hooks/useBookingContext'
import type { Destination } from '../types/travel'
import { formatCurrency } from '../utils/format'

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const { favorites, toggleFavorite, setSelectedDestinationId } = useBookingContext()
  const isFavorite = favorites.includes(destination.id)

  return (
    <article className="overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="h-52 w-full object-cover"
      />
      <div className="grid gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase text-emerald-800">{destination.country}</p>
            <h3 className="text-2xl font-black text-stone-950">{destination.name}</h3>
          </div>
          <button
            className={`grid size-10 place-items-center rounded-md border ${
              isFavorite ? 'border-rose-300 bg-rose-50 text-rose-700' : 'border-stone-200'
            }`}
            onClick={() => toggleFavorite(destination.id)}
            aria-label="Marcar favorito"
          >
            <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>

        <p className="text-sm leading-6 text-stone-600">{destination.summary}</p>

        <div className="flex flex-wrap gap-2">
          {destination.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-stone-100 px-3 py-1 text-xs font-bold">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-stone-100 pt-4">
          <span className="inline-flex items-center gap-1 text-sm font-bold text-amber-700">
            <Star size={16} fill="currentColor" />
            {destination.rating}
          </span>
          <span className="font-black text-emerald-900">
            {formatCurrency(destination.priceFrom)}
          </span>
        </div>

        <Link
          to="/planificador"
          onClick={() => setSelectedDestinationId(destination.id)}
          className="rounded-md bg-emerald-900 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-emerald-800"
        >
          Reservar propuesta
        </Link>
      </div>
    </article>
  )
}
