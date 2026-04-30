import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="page-shell grid min-h-[60vh] place-items-center py-12 text-center">
      <div>
        <p className="text-sm font-black uppercase text-emerald-800">404</p>
        <h1 className="mt-3 text-4xl font-black text-stone-950">Ruta no encontrada</h1>
        <p className="mt-3 text-stone-600">La pagina que buscas no existe dentro de Corvus Viajes.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-emerald-900 px-5 py-3 font-black text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
