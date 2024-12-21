import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CustomNavbar from './CustomNavbar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
{/* <CustomNavbar /> */}
  </StrictMode>,
)
