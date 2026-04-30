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
      <div className="rounded-md border border-dashed border-stone-300 p-6 text-sm text-stone-600">
        Aun no hay solicitudes. Crea una desde el formulario.
      </div>
    )
  }

  return (
    <div className="grid gap-3">
      {reservations.map((reservation) => (
        <article key={reservation.id} className="rounded-md border border-stone-200 bg-white p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-black text-stone-950">{reservation.customerName}</p>
              <p className="text-sm text-stone-600">
                {reservation.travelers} viajeros | salida {formatDate(reservation.startDate)}
              </p>
              <p className="mt-2 text-xs font-bold uppercase text-emerald-800">{reservation.status}</p>
            </div>
            {reservation.status !== 'cancelled' && (
              <button
                className="grid size-10 place-items-center rounded-md border border-stone-200 text-red-700"
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
