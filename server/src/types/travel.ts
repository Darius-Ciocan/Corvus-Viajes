export type Difficulty = 'relajado' | 'moderado' | 'intenso'
export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled'

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
  status: ReservationStatus
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
