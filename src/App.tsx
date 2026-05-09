import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { LoadingState } from './components/LoadingState'

const HomePage = lazy(() => import('./pages/HomePage'))
const DestinationsPage = lazy(() => import('./pages/DestinationsPage'))
const PlannerPage = lazy(() => import('./pages/PlannerPage'))
const InventoryPage = lazy(() => import('./pages/InventoryPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <AppShell>
      <Suspense fallback={<LoadingState label="Preparando rutas de Corvus Viajes" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinos" element={<DestinationsPage />} />
          <Route path="/planificador" element={<PlannerPage />} />
          <Route path="/inventario" element={<InventoryPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </AppShell>
  )
}
