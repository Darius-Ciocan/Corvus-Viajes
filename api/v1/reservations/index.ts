import { reservationService } from '../../../server/src/services/reservationService.js'
import type { ReservationInput } from '../../../server/src/types/travel.js'
import type { VercelRequest, VercelResponse } from '../types.js'

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    response.status(200).json(reservationService.findAll())
    return
  }

  if (request.method === 'POST') {
    try {
      const reservation = reservationService.create(request.body as ReservationInput)
      response.status(201).json(reservation)
    } catch (error) {
      response.status(400).json({
        message: error instanceof Error ? error.message : 'Datos de reserva no validos.',
      })
    }
    return
  }

  response.setHeader('Allow', ['GET', 'POST'])
  response.status(405).json({ message: 'Metodo no permitido.' })
}
