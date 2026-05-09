import { useEffect, useState } from 'react'
import { apiClient } from '../api/client'
import type { Category } from '../types/inventory'

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    apiClient
      .getCategories()
      .then((data) => {
        if (isMounted) {
          setCategories(data)
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

  return { categories, isLoading, error }
}
