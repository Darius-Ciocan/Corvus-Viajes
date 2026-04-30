import { useMemo } from 'react'
import type { Destination } from '../types/travel'

export function useTripBudget(destination: Destination | undefined, travelers: number) {
  return useMemo(() => {
    if (!destination || travelers < 1) {
      return { base: 0, serviceFee: 0, total: 0 }
    }

    const base = destination.priceFrom * travelers
    const serviceFee = Math.round(base * 0.08)

    return {
      base,
      serviceFee,
      total: base + serviceFee,
    }
  }, [destination, travelers])
}
