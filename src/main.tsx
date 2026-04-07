import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mahdava/ui/tw-inline-source.css'
import '@mahdava/ui/styles.css'
import '@mahdava/ui/themes/default.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
