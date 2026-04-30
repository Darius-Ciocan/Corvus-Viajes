import { Compass, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/destinos', label: 'Destinos' },
  { to: '/planificador', label: 'Planificador' },
  { to: '/nosotros', label: 'Nosotros' },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-[#fbf8f0]/90 backdrop-blur">
        <nav className="page-shell flex h-20 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 font-black text-xl text-emerald-950">
            <span className="grid size-11 place-items-center rounded-md bg-emerald-900 text-white">
              <Compass size={24} aria-hidden="true" />
            </span>
            Corvus Viajes
          </NavLink>

          <button
            className="grid size-10 place-items-center rounded-md border border-stone-300 md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-emerald-900 text-white'
                      : 'text-stone-700 hover:bg-white hover:text-emerald-950'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {isMenuOpen && (
          <div className="page-shell grid gap-2 pb-4 md:hidden">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md border border-stone-200 bg-white px-4 py-3 font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main>{children}</main>
    </div>
  )
}
