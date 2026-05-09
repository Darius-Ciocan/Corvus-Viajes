import { neon } from '@neondatabase/serverless'
import { eq } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/neon-http'
import { categories, products } from './schema.js'

const client = neon(process.env.DATABASE_URL ?? '')
export const db = drizzle({ client, schema: { categories, products } })

export async function getProductsWithDrizzle() {
  return db
    .select({
      product: products.name,
      price: products.price,
      stock: products.stock,
      category: categories.name,
    })
    .from(products)
    .innerJoin(categories, eq(products.categoryId, categories.id))
    .orderBy(categories.name, products.name)
}
