import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { BookingProvider } from './context/BookingProvider'
import { ThemeProvider } from './context/ThemeProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
