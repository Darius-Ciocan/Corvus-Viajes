import { destinations, reservations } from '../config/data.js'
import type { Reservation, ReservationInput, ReservationStatus } from '../types/travel.js'

function validateReservation(payload: ReservationInput) {
  if (!payload.destinationId || !destinations.some((item) => item.id === payload.destinationId)) {
    return 'El destino no existe.'
  }

  if (!payload.customerName || payload.customerName.trim().length < 3) {
    return 'El nombre debe tener al menos 3 caracteres.'
  }

  if (!payload.email || !payload.email.includes('@')) {
    return 'El email no es valido.'
  }

  if (!payload.travelers || payload.travelers < 1 || payload.travelers > 12) {
    return 'El numero de viajeros debe estar entre 1 y 12.'
  }

  if (!payload.startDate) {
    return 'La fecha de salida es obligatoria.'
  }

  return null
}

export const reservationService = {
  findAll() {
    return [...reservations].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  },

  create(payload: ReservationInput): Reservation {
    const validationError = validateReservation(payload)
    if (validationError) {
      throw new Error(validationError)
    }

    const reservation: Reservation = {
      id: `res-${Date.now()}`,
      destinationId: payload.destinationId,
      customerName: payload.customerName.trim(),
      email: payload.email.trim(),
      travelers: payload.travelers,
      startDate: payload.startDate,
      notes: payload.notes?.trim(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    reservations.push(reservation)
    return reservation
  },

  updateStatus(id: string, status: ReservationStatus) {
    const reservation = reservations.find((item) => item.id === id)

    if (!reservation) return null

    reservation.status = status
    return reservation
  },

  remove(id: string) {
    const index = reservations.findIndex((item) => item.id === id)

    if (index === -1) return false

    reservations.splice(index, 1)
    return true
  },
}
