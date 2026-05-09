import { productService } from '../../../server/src/services/productService.js'
import type { ProductInput } from '../../../server/src/types/inventory.js'
import type { VercelRequest, VercelResponse } from '../types.js'

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    try {
      const products = await productService.findAll()
      response.status(200).json(products)
    } catch (error) {
      response.status(500).json({
        message: error instanceof Error ? error.message : 'No se pudieron cargar los productos.',
      })
    }
    return
  }

  if (request.method === 'POST') {
    try {
      const product = await productService.create(request.body as ProductInput)
      response.status(201).json(product)
    } catch (error) {
      response.status(400).json({
        message: error instanceof Error ? error.message : 'No se pudo crear el producto.',
      })
    }
    return
  }

  response.setHeader('Allow', ['GET', 'POST'])
  response.status(405).json({ message: 'Método no permitido.' })
}
