export default function AboutPage() {
  return (
    <section className="page-shell grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-black uppercase text-emerald-800 dark:text-emerald-300">Sobre el proyecto</p>
        <h1 className="text-4xl font-black text-stone-950 dark:text-white">Una agencia pensada como microapp</h1>
      </div>
      <div className="reveal-up grid gap-5 text-stone-700 dark:text-emerald-50/75">
        <p className="leading-8">
          Corvus Viajes resuelve la primera fase de contacto entre una agencia y sus clientes:
          descubrir destinos, calcular una estimacion y solicitar una reserva con seguimiento.
        </p>
        <p className="leading-8">
          Somos una agencia moderna que combina asesoramiento cercano con herramientas digitales
          para crear viajes personalizados, claros y faciles de reservar. Cada propuesta se adapta
          al ritmo del viajero, al presupuesto y al tipo de experiencia que quiere vivir.
        </p>
      </div>
    </section>
  )
}
