import { destinations } from '../config/data.js'

export const destinationService = {
  findAll() {
    return destinations
  },

  findById(id: string) {
    return destinations.find((destination) => destination.id === id)
  },
}
