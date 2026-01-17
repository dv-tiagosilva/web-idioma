import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IdiomaWebsite from './IdiomaWebsite'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IdiomaWebsite />
  </StrictMode>,
)
