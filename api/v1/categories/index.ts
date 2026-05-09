import { categoryService } from '../../../server/src/services/categoryService.js'
import type { VercelRequest, VercelResponse } from '../types.js'

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    response.status(405).json({ message: 'Método no permitido.' })
    return
  }

  try {
    const categories = await categoryService.findAll()
    response.status(200).json(categories)
  } catch (error) {
    response.status(500).json({
      message: error instanceof Error ? error.message : 'No se pudieron cargar las categorías.',
    })
  }
}
