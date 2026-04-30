import type { Request, Response } from 'express'
import { destinationService } from '../services/destinationService'

export const destinationController = {
  list(_request: Request, response: Response) {
    response.status(200).json(destinationService.findAll())
  },

  detail(request: Request, response: Response) {
    const destination = destinationService.findById(request.params.id)

    if (!destination) {
      response.status(404).json({ message: 'Destino no encontrado.' })
      return
    }

    response.status(200).json(destination)
  },
}
