import { destinationService } from '../../../server/src/services/destinationService.js'
import type { VercelRequest, VercelResponse } from '../types.js'

export default function handler(request: VercelRequest, response: VercelResponse) {
  const id = String(request.query.id)
  const destination = destinationService.findById(id)

  if (!destination) {
    response.status(404).json({ message: 'Destino no encontrado.' })
    return
  }

  response.status(200).json(destination)
}
