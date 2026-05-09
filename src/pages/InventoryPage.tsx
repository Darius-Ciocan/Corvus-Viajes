import { Database } from 'lucide-react'
import { ErrorState } from '../components/ErrorState'
import { LoadingState } from '../components/LoadingState'
import { ProductForm } from '../components/ProductForm'
import { ProductTable } from '../components/ProductTable'
import { useCategories } from '../hooks/useCategories'
import { useProducts } from '../hooks/useProducts'

export default function InventoryPage() {
  const productsState = useProducts()
  const categoriesState = useCategories()

  if (productsState.isLoading || categoriesState.isLoading) {
    return <LoadingState label="Cargando inventario desde Neon" />
  }

  if (productsState.error) {
    return <ErrorState message={productsState.error} onRetry={productsState.refresh} />
  }

  if (categoriesState.error) {
    return <ErrorState message={categoriesState.error} />
  }

  return (
    <section className="page-shell grid gap-8 py-12">
      <div className="reveal-up flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase text-emerald-800 dark:text-emerald-300">Base de datos</p>
          <h1 className="mt-2 text-4xl font-black text-stone-950 dark:text-white">Inventario de viajes</h1>
          <p className="mt-3 max-w-2xl text-stone-600 dark:text-emerald-50/70">
            Productos y categorías cargados desde PostgreSQL en Neon mediante consultas SQL seguras.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-md border border-stone-200 bg-white px-4 py-3 text-sm font-bold text-emerald-900 dark:border-emerald-300/15 dark:bg-white/10 dark:text-emerald-300">
          <Database size={18} aria-hidden="true" />
          Neon PostgreSQL
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
        <ProductTable products={productsState.products} />
        <ProductForm categories={categoriesState.categories} onSubmit={productsState.createProduct} />
      </div>
    </section>
  )
}
