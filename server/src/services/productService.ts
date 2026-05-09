import { getSql } from '../lib/db.js'
import type { ProductInput, ProductWithCategory } from '../types/inventory.js'

interface ProductRow {
  id: string
  name: string
  price: string
  stock: number
  category_id: string
  category_name: string
  category_description: string | null
}

function mapProduct(row: ProductRow): ProductWithCategory {
  return {
    id: row.id,
    name: row.name,
    price: Number(row.price),
    stock: row.stock,
    categoryId: row.category_id,
    categoryName: row.category_name,
    categoryDescription: row.category_description,
  }
}

function validateProduct(payload: ProductInput) {
  if (!payload.name || payload.name.trim().length < 3) {
    return 'El nombre del producto debe tener al menos 3 caracteres.'
  }

  if (!payload.price || payload.price <= 0) {
    return 'El precio debe ser mayor que 0.'
  }

  if (payload.stock !== undefined && payload.stock < 0) {
    return 'El stock no puede ser negativo.'
  }

  if (!payload.categoryId) {
    return 'La categoría es obligatoria.'
  }

  return null
}

export const productService = {
  async findAll() {
    const sql = getSql()

    const rows = await sql`
      SELECT
        p.id,
        p.name,
        p.price,
        p.stock,
        p.category_id,
        c.name AS category_name,
        c.description AS category_description
      FROM products p
      INNER JOIN categories c ON p.category_id = c.id
      ORDER BY c.name, p.name
    `

    return (rows as ProductRow[]).map(mapProduct)
  },

  async create(payload: ProductInput) {
    const sql = getSql()

    const validationError = validateProduct(payload)

    if (validationError) {
      throw new Error(validationError)
    }

    const rows = await sql`
      INSERT INTO products (name, price, stock, category_id)
      VALUES (${payload.name.trim()}, ${payload.price}, ${payload.stock ?? 0}, ${payload.categoryId})
      RETURNING id, name, price, stock, category_id
    `

    const inserted = rows[0] as {
      id: string
      name: string
      price: string
      stock: number
      category_id: string
    }

    const [created] = await sql`
      SELECT
        p.id,
        p.name,
        p.price,
        p.stock,
        p.category_id,
        c.name AS category_name,
        c.description AS category_description
      FROM products p
      INNER JOIN categories c ON p.category_id = c.id
      WHERE p.id = ${inserted.id}
    `

    return mapProduct(created as ProductRow)
  },
}
