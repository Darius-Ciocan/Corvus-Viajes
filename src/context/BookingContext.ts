import { createContext } from 'react'

export interface BookingContextValue {
  selectedDestinationId: string
  setSelectedDestinationId: (id: string) => void
  favorites: string[]
  toggleFavorite: (id: string) => void
}

export const BookingContext = createContext<BookingContextValue | undefined>(undefined)
