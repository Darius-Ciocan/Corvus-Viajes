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
    <article className="interactive-lift reveal-up overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm hover:shadow-lg dark:border-emerald-300/15 dark:bg-white/10 dark:shadow-black/20">
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="h-52 w-full object-cover transition duration-500 hover:scale-[1.03]"
      />
      <div className="grid gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase text-emerald-800 dark:text-emerald-300">{destination.country}</p>
            <h3 className="text-2xl font-black text-stone-950 dark:text-white">{destination.name}</h3>
          </div>
          <button
            className={`pressable grid size-10 place-items-center rounded-md border ${
              isFavorite
                ? 'border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-300/40 dark:bg-rose-400/15 dark:text-rose-200'
                : 'border-stone-200 dark:border-emerald-300/15 dark:text-emerald-50'
            }`}
            onClick={() => toggleFavorite(destination.id)}
            aria-label="Marcar favorito"
          >
            <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>

        <p className="text-sm leading-6 text-stone-600 dark:text-emerald-50/70">{destination.summary}</p>

        <div className="flex flex-wrap gap-2">
          {destination.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-stone-100 px-3 py-1 text-xs font-bold dark:bg-white/10 dark:text-emerald-50">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-stone-100 pt-4 dark:border-emerald-300/10">
          <span className="inline-flex items-center gap-1 text-sm font-bold text-amber-700 dark:text-amber-300">
            <Star size={16} fill="currentColor" />
            {destination.rating}
          </span>
          <span className="font-black text-emerald-900 dark:text-emerald-300">
            {formatCurrency(destination.priceFrom)}
          </span>
        </div>

        <Link
          to="/planificador"
          onClick={() => setSelectedDestinationId(destination.id)}
          className="pressable rounded-md bg-emerald-900 px-4 py-3 text-center text-sm font-black text-white hover:bg-emerald-800 dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
        >
          Reservar propuesta
        </Link>
      </div>
    </article>
  )
}
