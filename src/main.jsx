import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homepage from './components/Pages/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage/>
  </StrictMode>,
)
