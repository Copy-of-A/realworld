import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HashRouter basename={import.meta.env.VITE_APP_BASE_PATH as string}>
      <App />
    </HashRouter>
  </StrictMode>
)
