import { XCircle } from 'lucide-react'
import type { Reservation } from '../types/travel'
import { formatDate } from '../utils/format'

interface ReservationListProps {
  reservations: Reservation[]
  onCancel: (id: string) => Promise<void>
}

export function ReservationList({ reservations, onCancel }: ReservationListProps) {
  if (reservations.length === 0) {
    return (
      <div className="reveal-up rounded-md border border-dashed border-stone-300 p-6 text-sm text-stone-600 dark:border-emerald-300/20 dark:text-emerald-50/70">
        Aun no hay solicitudes. Crea una desde el formulario.
      </div>
    )
  }

  return (
    <div className="grid gap-3">
      {reservations.map((reservation) => (
        <article key={reservation.id} className="interactive-lift reveal-up rounded-md border border-stone-200 bg-white p-4 dark:border-emerald-300/15 dark:bg-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-black text-stone-950 dark:text-white">{reservation.customerName}</p>
              <p className="text-sm text-stone-600 dark:text-emerald-50/70">
                {reservation.travelers} viajeros | salida {formatDate(reservation.startDate)}
              </p>
              <p className="mt-2 text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300">{reservation.status}</p>
            </div>
            {reservation.status !== 'cancelled' && (
              <button
                className="pressable grid size-10 place-items-center rounded-md border border-stone-200 text-red-700 dark:border-red-300/30 dark:text-red-300"
                onClick={() => onCancel(reservation.id)}
                aria-label="Cancelar reserva"
              >
                <XCircle size={18} />
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
