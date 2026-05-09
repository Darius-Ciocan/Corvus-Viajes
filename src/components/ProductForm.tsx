import { PackagePlus } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Category, ProductInput } from '../types/inventory'

interface ProductFormProps {
  categories: Category[]
  onSubmit: (payload: ProductInput) => Promise<unknown>
}

export function ProductForm({ categories, onSubmit }: ProductFormProps) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(100)
  const [stock, setStock] = useState(1)
  const [categoryId, setCategoryId] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('')

    if (!name.trim() || price <= 0 || stock < 0 || !categoryId) {
      setMessage('Revisa nombre, precio, stock y categoría.')
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit({ name, price, stock, categoryId })
      setName('')
      setPrice(100)
      setStock(1)
      setMessage('Producto creado correctamente.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'No se pudo crear el producto.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="reveal-up grid gap-4 rounded-md border border-stone-200 bg-white p-5 shadow-sm dark:border-emerald-300/15 dark:bg-white/10 dark:text-emerald-50">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Producto
          <input
            className="rounded-md border border-stone-300 px-3 py-3 font-normal transition focus:-translate-y-0.5 focus:border-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-800/10 dark:border-emerald-300/20 dark:bg-[#10221d] dark:text-white"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ruta por Lisboa"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold">
          Categoría
          <select
            className="rounded-md border border-stone-300 bg-white px-3 py-3 font-normal transition focus:-translate-y-0.5 focus:border-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-800/10 dark:border-emerald-300/20 dark:bg-[#10221d] dark:text-white"
            value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}
          >
            <option value="">Elige categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Precio
          <input
            type="number"
            min="1"
            step="0.01"
            className="rounded-md border border-stone-300 px-3 py-3 font-normal transition focus:-translate-y-0.5 focus:border-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-800/10 dark:border-emerald-300/20 dark:bg-[#10221d] dark:text-white"
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </label>

        <label className="grid gap-2 text-sm font-bold">
          Stock
          <input
            type="number"
            min="0"
            className="rounded-md border border-stone-300 px-3 py-3 font-normal transition focus:-translate-y-0.5 focus:border-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-800/10 dark:border-emerald-300/20 dark:bg-[#10221d] dark:text-white"
            value={stock}
            onChange={(event) => setStock(Number(event.target.value))}
          />
        </label>
      </div>

      {message && <p className="reveal-up rounded-md bg-stone-100 p-3 text-sm font-semibold dark:bg-white/10">{message}</p>}

      <button
        disabled={isSubmitting}
        className="pressable inline-flex items-center justify-center gap-2 rounded-md bg-emerald-900 px-5 py-3 font-black text-white disabled:cursor-not-allowed disabled:bg-stone-400 dark:bg-emerald-400 dark:text-emerald-950"
      >
        <PackagePlus size={18} aria-hidden="true" />
        {isSubmitting ? 'Guardando' : 'Crear producto'}
      </button>
    </form>
  )
}
