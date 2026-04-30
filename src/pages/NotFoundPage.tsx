import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="page-shell grid min-h-[60vh] place-items-center py-12 text-center">
      <div>
        <p className="text-sm font-black uppercase text-emerald-800 dark:text-emerald-300">404</p>
        <h1 className="mt-3 text-4xl font-black text-stone-950 dark:text-white">Ruta no encontrada</h1>
        <p className="mt-3 text-stone-600 dark:text-emerald-50/70">La pagina que buscas no existe dentro de Corvus Viajes.</p>
        <Link
          to="/"
          className="pressable mt-6 inline-block rounded-md bg-emerald-900 px-5 py-3 font-black text-white dark:bg-emerald-400 dark:text-emerald-950"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
