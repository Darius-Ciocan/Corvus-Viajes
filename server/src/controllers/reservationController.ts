import type { Request, Response } from 'express'
import { reservationService } from '../services/reservationService.js'
import type { ReservationInput, ReservationStatus } from '../types/travel.js'

const validStatuses: ReservationStatus[] = ['pending', 'confirmed', 'cancelled']

export const reservationController = {
  list(_request: Request, response: Response) {
    response.status(200).json(reservationService.findAll())
  },

  create(request: Request<unknown, unknown, ReservationInput>, response: Response) {
    try {
      const reservation = reservationService.create(request.body)
      response.status(201).json(reservation)
    } catch (error) {
      response.status(400).json({
        message: error instanceof Error ? error.message : 'Datos de reserva no validos.',
      })
    }
  },

  update(request: Request<{ id: string }, unknown, { status: ReservationStatus }>, response: Response) {
    if (!validStatuses.includes(request.body.status)) {
      response.status(400).json({ message: 'Estado no valido.' })
      return
    }

    const reservation = reservationService.updateStatus(String(request.params.id), request.body.status)

    if (!reservation) {
      response.status(404).json({ message: 'Reserva no encontrada.' })
      return
    }

    response.status(200).json(reservation)
  },

  remove(request: Request<{ id: string }>, response: Response) {
    const removed = reservationService.remove(String(request.params.id))

    if (!removed) {
      response.status(404).json({ message: 'Reserva no encontrada.' })
      return
    }

    response.status(200).json({ message: 'Reserva eliminada.' })
  },
}
