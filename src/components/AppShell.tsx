import { Compass, Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { ParticleBackground } from './ParticleBackground'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/destinos', label: 'Destinos' },
  { to: '/planificador', label: 'Planificador' },
  { to: '/inventario', label: 'Inventario' },
  { to: '/nosotros', label: 'Nosotros' },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-[#fbf8f0]/90 backdrop-blur dark:border-emerald-300/10 dark:bg-[#081310]/88">
        <nav className="page-shell flex h-20 items-center justify-between">
          <NavLink
            to="/"
            className="interactive-lift flex items-center gap-3 font-black text-xl text-emerald-950 dark:text-emerald-50"
          >
            <span className="grid size-11 place-items-center rounded-md bg-emerald-900 text-white shadow-lg shadow-emerald-900/15 dark:bg-emerald-400 dark:text-emerald-950">
              <Compass size={24} aria-hidden="true" />
            </span>
            Corvus Viajes
          </NavLink>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `pressable rounded-md px-4 py-2 text-sm font-semibold ${
                      isActive
                        ? 'bg-emerald-900 text-white shadow-md shadow-emerald-900/15 dark:bg-emerald-400 dark:text-emerald-950'
                        : 'text-stone-700 hover:bg-white hover:text-emerald-950 dark:text-emerald-50/80 dark:hover:bg-white/10 dark:hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <button
              className="pressable grid size-10 place-items-center rounded-md border border-stone-300 bg-white/75 text-emerald-950 shadow-sm dark:border-emerald-300/20 dark:bg-white/10 dark:text-emerald-50"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button
              className="pressable grid size-10 place-items-center rounded-md border border-stone-300 bg-white/75 dark:border-emerald-300/20 dark:bg-white/10 dark:text-emerald-50 md:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="page-shell reveal-up grid gap-2 pb-4 md:hidden">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="pressable rounded-md border border-stone-200 bg-white px-4 py-3 font-semibold dark:border-emerald-300/15 dark:bg-white/10 dark:text-emerald-50"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10">{children}</main>
    </div>
  )
}
