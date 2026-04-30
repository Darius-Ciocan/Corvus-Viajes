import { Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useBookingContext } from '../hooks/useBookingContext'
import { useTripBudget } from '../hooks/useTripBudget'
import type { Destination, ReservationInput } from '../types/travel'
import { formatCurrency } from '../utils/format'

interface ReservationFormProps {
  destinations: Destination[]
  onSubmit: (payload: ReservationInput) => Promise<unknown>
}

export function ReservationForm({ destinations, onSubmit }: ReservationFormProps) {
  const { selectedDestinationId, setSelectedDestinationId } = useBookingContext()
  const [customerName, setCustomerName] = useState('')
  const [email, setEmail] = useState('')
  const [travelers, setTravelers] = useState(2)
  const [startDate, setStartDate] = useState('')
  const [notes, setNotes] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const selectedDestination = useMemo(
    () => destinations.find((destination) => destination.id === selectedDestinationId),
    [destinations, selectedDestinationId],
  )
  const budget = useTripBudget(selectedDestination, travelers)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('')

    if (!selectedDestinationId || customerName.trim().length < 3 || !email.includes('@')) {
      setMessage('Revisa destino, nombre y email antes de enviar.')
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit({
        destinationId: selectedDestinationId,
        customerName,
        email,
        travelers,
        startDate,
        notes,
      })
      setMessage('Solicitud enviada correctamente.')
      setCustomerName('')
      setEmail('')
      setNotes('')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'No se pudo crear la reserva.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-md border border-stone-200 bg-white p-5">
      <label className="grid gap-2 text-sm font-bold">
        Destino
        <select
          className="rounded-md border border-stone-300 bg-white px-3 py-3 font-normal"
          value={selectedDestinationId}
          onChange={(event) => setSelectedDestinationId(event.target.value)}
        >
          <option value="">Elige destino</option>
          {destinations.map((destination) => (
            <option key={destination.id} value={destination.id}>
              {destination.name}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Nombre completo
          <input
            className="rounded-md border border-stone-300 px-3 py-3 font-normal"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="Laura Martin"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Email
          <input
            className="rounded-md border border-stone-300 px-3 py-3 font-normal"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="correo@ejemplo.com"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Viajeros
          <input
            type="number"
            min="1"
            max="12"
            className="rounded-md border border-stone-300 px-3 py-3 font-normal"
            value={travelers}
            onChange={(event) => setTravelers(Number(event.target.value))}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Fecha de salida
          <input
            type="date"
            className="rounded-md border border-stone-300 px-3 py-3 font-normal"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold">
        Preferencias
        <textarea
          className="min-h-28 rounded-md border border-stone-300 px-3 py-3 font-normal"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Ritmo del viaje, presupuesto, tipo de hotel..."
        />
      </label>

      <div className="rounded-md bg-emerald-50 p-4 text-sm text-emerald-950">
        <p className="font-black">Presupuesto estimado</p>
        <p className="mt-1">Base: {formatCurrency(budget.base)} | Servicio: {formatCurrency(budget.serviceFee)}</p>
        <p className="mt-1 text-lg font-black">Total: {formatCurrency(budget.total)}</p>
      </div>

      {message && <p className="rounded-md bg-stone-100 p-3 text-sm font-semibold">{message}</p>}

      <button
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-900 px-5 py-3 font-black text-white disabled:cursor-not-allowed disabled:bg-stone-400"
      >
        <Send size={18} aria-hidden="true" />
        {isSubmitting ? 'Enviando' : 'Solicitar reserva'}
      </button>
    </form>
  )
}
