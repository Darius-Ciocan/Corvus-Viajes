import { destinations } from '../config/data'

export const destinationService = {
  findAll() {
    return destinations
  },

  findById(id: string) {
    return destinations.find((destination) => destination.id === id)
  },
}
