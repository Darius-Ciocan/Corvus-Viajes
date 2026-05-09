import { useCallback, useEffect, useState } from 'react'
import { apiClient } from '../api/client'
import type { ProductInput, ProductWithCategory } from '../types/inventory'

export function useProducts() {
  const [products, setProducts] = useState<ProductWithCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await apiClient.getProducts()
      setProducts(data)
      setError(null)
    } catch (currentError) {
      setError(currentError instanceof Error ? currentError.message : 'Error desconocido')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createProduct = useCallback(async (payload: ProductInput) => {
    const created = await apiClient.createProduct(payload)
    setProducts((current) => [...current, created].sort((a, b) => a.name.localeCompare(b.name)))
    return created
  }, [])

  useEffect(() => {
    let isMounted = true

    apiClient
      .getProducts()
      .then((data) => {
        if (isMounted) {
          setProducts(data)
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

  return { products, isLoading, error, refresh, createProduct }
}
