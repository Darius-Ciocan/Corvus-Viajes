import type { Request, Response } from 'express'
import { productService } from '../services/productService.js'
import type { ProductInput } from '../types/inventory.js'

export const productController = {
  async list(_request: Request, response: Response) {
    try {
      const products = await productService.findAll()
      response.status(200).json(products)
    } catch (error) {
      response.status(500).json({
        message: error instanceof Error ? error.message : 'No se pudieron cargar los productos.',
      })
    }
  },

  async create(request: Request<unknown, unknown, ProductInput>, response: Response) {
    try {
      const product = await productService.create(request.body)
      response.status(201).json(product)
    } catch (error) {
      response.status(400).json({
        message: error instanceof Error ? error.message : 'No se pudo crear el producto.',
      })
    }
  },
}
