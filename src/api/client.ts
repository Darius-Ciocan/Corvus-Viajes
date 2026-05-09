import type { Category, ProductInput, ProductWithCategory } from '../types/inventory'
import type { Destination, Reservation, ReservationInput } from '../types/travel'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? '/api/v1'

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const error = (await response.json().catch(() => null)) as { message?: string } | null
    throw new Error(error?.message ?? 'No se pudo completar la peticion')
  }

  return response.json() as Promise<T>
}

export const apiClient = {
  getDestinations: () => request<Destination[]>('/destinations'),
  getDestination: (id: string) => request<Destination>(`/destinations/${id}`),
  getReservations: () => request<Reservation[]>('/reservations'),
  createReservation: (payload: ReservationInput) =>
    request<Reservation>('/reservations', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  updateReservationStatus: (id: string, status: Reservation['status']) =>
    request<Reservation>(`/reservations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),
  deleteReservation: (id: string) =>
    request<{ message: string }>(`/reservations/${id}`, {
      method: 'DELETE',
    }),
  getCategories: () => request<Category[]>('/categories'),
  getProducts: () => request<ProductWithCategory[]>('/products'),
  createProduct: (payload: ProductInput) =>
    request<ProductWithCategory>('/products', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
}
