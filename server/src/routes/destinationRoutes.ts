import { Router } from 'express'
import { destinationController } from '../controllers/destinationController.js'

export const destinationRouter = Router()

destinationRouter.get('/', destinationController.list)
destinationRouter.get('/:id', destinationController.detail)
