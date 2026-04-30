import { Router } from 'express'
import { reservationController } from '../controllers/reservationController'

export const reservationRouter = Router()

reservationRouter.get('/', reservationController.list)
reservationRouter.post('/', reservationController.create)
reservationRouter.patch('/:id', reservationController.update)
reservationRouter.delete('/:id', reservationController.remove)
