import type { Request, Response } from 'express'
import { categoryService } from '../services/categoryService.js'

export const categoryController = {
  async list(_request: Request, response: Response) {
    try {
      const categories = await categoryService.findAll()
      response.status(200).json(categories)
    } catch (error) {
      response.status(500).json({
        message: error instanceof Error ? error.message : 'No se pudieron cargar las categorías.',
      })
    }
  },
}
