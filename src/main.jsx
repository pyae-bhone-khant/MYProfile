import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SmartNavbar from './components/MainNav.jsx'
import CustomCursor from './components/CustomCursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=''>
      <CustomCursor />
      <SmartNavbar />
      <App />
    </div>
  </StrictMode>
)
