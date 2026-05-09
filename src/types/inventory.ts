export interface Category {
  id: string
  name: string
  description: string | null
}

export interface ProductWithCategory {
  id: string
  name: string
  price: number
  stock: number
  categoryId: string
  categoryName: string
  categoryDescription: string | null
}

export interface ProductInput {
  name: string
  price: number
  stock?: number
  categoryId: string
}
