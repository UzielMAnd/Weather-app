import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WeatherApp } from './components/WeatherApp'
import './styles/weatherStyles.css'
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>,
)
