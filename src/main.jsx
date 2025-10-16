import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
