import { ReservationForm } from '../components/ReservationForm'
import { ReservationList } from '../components/ReservationList'
import { ErrorState } from '../components/ErrorState'
import { LoadingState } from '../components/LoadingState'
import { useDestinations } from '../hooks/useDestinations'
import { useReservations } from '../hooks/useReservations'

export default function PlannerPage() {
  const destinationsState = useDestinations()
  const reservationsState = useReservations()

  if (destinationsState.isLoading || reservationsState.isLoading) {
    return <LoadingState label="Preparando planificador" />
  }

  if (destinationsState.error) return <ErrorState message={destinationsState.error} />
  if (reservationsState.error) {
    return <ErrorState message={reservationsState.error} onRetry={reservationsState.refresh} />
  }

  return (
    <section className="page-shell grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-sm font-black uppercase text-emerald-800 dark:text-emerald-300">Formulario controlado</p>
        <h1 className="text-4xl font-black text-stone-950 dark:text-white">Planificador de reservas</h1>
        <p className="mt-3 text-stone-600 dark:text-emerald-50/70">
          La solicitud se valida en frontend y backend. Los datos de reserva viven en la API.
        </p>
        <div className="mt-6">
          <ReservationForm
            destinations={destinationsState.destinations}
            onSubmit={reservationsState.createReservation}
          />
        </div>
      </div>
      <aside>
        <p className="text-sm font-black uppercase text-emerald-800 dark:text-emerald-300">Estado global y API</p>
        <h2 className="text-2xl font-black text-stone-950 dark:text-white">Solicitudes recientes</h2>
        <div className="mt-6">
          <ReservationList
            reservations={reservationsState.reservations}
            onCancel={reservationsState.cancelReservation}
          />
        </div>
      </aside>
    </section>
  )
}
