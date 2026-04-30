import { useEffect, useState } from 'react'
import { apiClient } from '../api/client'
import type { Destination } from '../types/travel'

export function useDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    apiClient
      .getDestinations()
      .then((data) => {
        if (isMounted) {
          setDestinations(data)
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

  return { destinations, isLoading, error }
}
