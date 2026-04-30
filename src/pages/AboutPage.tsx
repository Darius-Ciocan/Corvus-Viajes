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
          El proyecto esta dividido en frontend, cliente tipado de API y backend Express por capas.
          La documentacion en la carpeta docs explica metodologia, arquitectura, componentes, hooks,
          rutas, formularios, API, testing, despliegue y retrospectiva.
        </p>
      </div>
    </section>
  )
}
