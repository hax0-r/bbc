import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NavbarProvider } from './Context/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <NavbarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </NavbarProvider>
)
