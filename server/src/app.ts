import cors from 'cors'
import express from 'express'
import { categoryRouter } from './routes/categoryRoutes.js'
import { destinationRouter } from './routes/destinationRoutes.js'
import { productRouter } from './routes/productRoutes.js'
import { reservationRouter } from './routes/reservationRoutes.js'

export const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/v1/health', (_request, response) => {
  response.status(200).json({ status: 'ok', service: 'corvus-viajes-api' })
})

app.use('/api/v1/destinations', destinationRouter)
app.use('/api/v1/reservations', reservationRouter)
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/products', productRouter)

app.use((_request, response) => {
  response.status(404).json({ message: 'Ruta de API no encontrada.' })
})

app.use((error: Error, _request: express.Request, response: express.Response, next: express.NextFunction) => {
  void next
  console.error(error)
  response.status(500).json({ message: 'Error interno del servidor.' })
})
