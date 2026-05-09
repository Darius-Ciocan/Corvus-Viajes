import type { ProductWithCategory } from '../types/inventory'
import { formatCurrency } from '../utils/format'

interface ProductTableProps {
  products: ProductWithCategory[]
}

export function ProductTable({ products }: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-stone-300 p-6 text-sm text-stone-600 dark:border-emerald-300/20 dark:text-emerald-50/70">
        No hay productos en la base de datos.
      </div>
    )
  }

  return (
    <div className="reveal-up overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm dark:border-emerald-300/15 dark:bg-white/10">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-emerald-900 text-white dark:bg-emerald-400 dark:text-emerald-950">
          <tr>
            <th className="px-4 py-3">Producto</th>
            <th className="px-4 py-3">Categoría</th>
            <th className="px-4 py-3">Precio</th>
            <th className="px-4 py-3">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t border-stone-100 dark:border-emerald-300/10">
              <td className="px-4 py-3 font-bold text-stone-950 dark:text-white">{product.name}</td>
              <td className="px-4 py-3 text-stone-600 dark:text-emerald-50/70">{product.categoryName}</td>
              <td className="px-4 py-3 font-bold text-emerald-900 dark:text-emerald-300">
                {formatCurrency(product.price)}
              </td>
              <td className="px-4 py-3 text-stone-600 dark:text-emerald-50/70">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
