export type Difficulty = 'relajado' | 'moderado' | 'intenso'

export interface Destination {
  id: string
  name: string
  country: string
  summary: string
  description: string
  imageUrl: string
  priceFrom: number
  durationDays: number
  tags: string[]
  difficulty: Difficulty
  rating: number
}

export interface Reservation {
  id: string
  destinationId: string
  customerName: string
  email: string
  travelers: number
  startDate: string
  notes?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

export interface ReservationInput {
  destinationId: string
  customerName: string
  email: string
  travelers: number
  startDate: string
  notes?: string
}

export interface ApiErrorResponse {
  message: string
}
