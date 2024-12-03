import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './ClickCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickCounter />
  </StrictMode>
  ,
)
