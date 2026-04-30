import { destinationService } from '../../../server/src/services/destinationService.js'
import type { VercelRequest, VercelResponse } from '../types.js'

export default function handler(_request: VercelRequest, response: VercelResponse) {
  response.status(200).json(destinationService.findAll())
}
