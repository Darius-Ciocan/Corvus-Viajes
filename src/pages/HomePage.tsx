import { ArrowRight, Map, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DestinationCard } from '../components/DestinationCard'
import { ErrorState } from '../components/ErrorState'
import { LoadingState } from '../components/LoadingState'
import { useDestinations } from '../hooks/useDestinations'

export default function HomePage() {
  const { destinations, isLoading, error } = useDestinations()
  const featured = destinations.slice(0, 3)

  return (
    <>
      <section className="page-shell grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-emerald-800">Agencia boutique de viajes</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight text-stone-950 md:text-7xl">
            Corvus Viajes
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
            Organizamos escapadas culturales, rutas naturales y experiencias a medida para personas
            que quieren viajar con criterio, seguridad y una propuesta clara.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/destinos"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-900 px-5 py-3 font-black text-white"
            >
              Ver destinos
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/planificador"
              className="rounded-md border border-stone-300 bg-white px-5 py-3 font-black text-stone-900"
            >
              Planificar viaje
            </Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
          alt="Paisaje de viaje con montanas y lago"
          className="h-[520px] w-full rounded-md object-cover shadow-xl"
        />
      </section>

      <section className="page-shell grid gap-4 py-8 md:grid-cols-3">
        {[
          { icon: Map, title: 'Rutas curadas', text: 'Itinerarios pensados por ritmo, intereses y temporada.' },
          { icon: ShieldCheck, title: 'Gestion clara', text: 'Solicitud, seguimiento y estado de reserva desde la app.' },
          { icon: Sparkles, title: 'Experiencias', text: 'Propuestas con cultura local, naturaleza y margen para improvisar.' },
        ].map((item) => (
          <article key={item.title} className="rounded-md border border-stone-200 bg-white p-5">
            <item.icon className="text-emerald-800" size={26} />
            <h2 className="mt-4 text-xl font-black">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
          </article>
        ))}
      </section>

      {isLoading && <LoadingState label="Cargando destinos destacados" />}
      {error && <ErrorState message={error} />}
      {!isLoading && !error && (
        <section className="page-shell py-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase text-emerald-800">Seleccion destacados</p>
              <h2 className="text-3xl font-black text-stone-950">Viajes listos para adaptar</h2>
            </div>
            <Link to="/destinos" className="font-black text-emerald-900">
              Ver todos
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
