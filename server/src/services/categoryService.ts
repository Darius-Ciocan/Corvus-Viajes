import { getSql } from '../lib/db.js'
import type { Category } from '../types/inventory.js'

interface CategoryRow {
  id: string
  name: string
  description: string | null
}

export const categoryService = {
  async findAll(): Promise<Category[]> {
    const sql = getSql()

    const rows = await sql`
      SELECT id, name, description
      FROM categories
      ORDER BY name
    `

    return (rows as CategoryRow[]).map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
    }))
  },
}
