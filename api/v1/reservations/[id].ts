import { reservationService } from '../../../server/src/services/reservationService.js'
import type { ReservationStatus } from '../../../server/src/types/travel.js'
import type { VercelRequest, VercelResponse } from '../types.js'

const validStatuses: ReservationStatus[] = ['pending', 'confirmed', 'cancelled']

export default function handler(request: VercelRequest, response: VercelResponse) {
  const id = String(request.query.id)

  if (request.method === 'PATCH') {
    const body = request.body as { status?: ReservationStatus }

    if (!body.status || !validStatuses.includes(body.status)) {
      response.status(400).json({ message: 'Estado no valido.' })
      return
    }

    const reservation = reservationService.updateStatus(id, body.status)

    if (!reservation) {
      response.status(404).json({ message: 'Reserva no encontrada.' })
      return
    }

    response.status(200).json(reservation)
    return
  }

  if (request.method === 'DELETE') {
    const removed = reservationService.remove(id)

    if (!removed) {
      response.status(404).json({ message: 'Reserva no encontrada.' })
      return
    }

    response.status(200).json({ message: 'Reserva eliminada.' })
    return
  }

  response.setHeader('Allow', ['PATCH', 'DELETE'])
  response.status(405).json({ message: 'Metodo no permitido.' })
}
