import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { destinationRouter } from './routes/destinationRoutes'
import { reservationRouter } from './routes/reservationRoutes'

dotenv.config()

const app = express()
const port = Number(process.env.PORT ?? 4000)

app.use(cors())
app.use(express.json())

app.get('/api/v1/health', (_request, response) => {
  response.status(200).json({ status: 'ok', service: 'corvus-viajes-api' })
})

app.use('/api/v1/destinations', destinationRouter)
app.use('/api/v1/reservations', reservationRouter)

app.use((_request, response) => {
  response.status(404).json({ message: 'Ruta de API no encontrada.' })
})

app.use((error: Error, _request: express.Request, response: express.Response, next: express.NextFunction) => {
  void next
  console.error(error)
  response.status(500).json({ message: 'Error interno del servidor.' })
})

app.listen(port, () => {
  console.log(`Corvus Viajes API listening on http://localhost:${port}`)
})
