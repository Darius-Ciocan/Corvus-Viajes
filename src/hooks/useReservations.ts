import { useCallback, useEffect, useState } from 'react'
import { apiClient } from '../api/client'
import type { Reservation, ReservationInput } from '../types/travel'

export function useReservations() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    try {
      const data = await apiClient.getReservations()
      setReservations(data)
      setError(null)
    } catch (currentError) {
      setError(currentError instanceof Error ? currentError.message : 'Error desconocido')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createReservation = useCallback(async (payload: ReservationInput) => {
    const created = await apiClient.createReservation(payload)
    setReservations((current) => [created, ...current])
    return created
  }, [])

  const cancelReservation = useCallback(async (id: string) => {
    const updated = await apiClient.updateReservationStatus(id, 'cancelled')
    setReservations((current) => current.map((item) => (item.id === id ? updated : item)))
  }, [])

  useEffect(() => {
    let isMounted = true

    apiClient
      .getReservations()
      .then((data) => {
        if (isMounted) {
          setReservations(data)
          setError(null)
        }
      })
      .catch((currentError: Error) => {
        if (isMounted) setError(currentError.message)
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { reservations, isLoading, error, refresh, createReservation, cancelReservation }
}
