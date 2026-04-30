import { useContext } from 'react'
import { BookingContext } from '../context/BookingContext'

export function useBookingContext() {
  const context = useContext(BookingContext)

  if (!context) {
    throw new Error('useBookingContext debe usarse dentro de BookingProvider')
  }

  return context
}
