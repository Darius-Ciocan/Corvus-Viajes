import { useCallback, useMemo, useState } from 'react'
import { BookingContext } from './BookingContext'

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedDestinationId, setSelectedDestinationId] = useState('')
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }, [])

  const value = useMemo(
    () => ({ selectedDestinationId, setSelectedDestinationId, favorites, toggleFavorite }),
    [favorites, selectedDestinationId, toggleFavorite],
  )

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}
