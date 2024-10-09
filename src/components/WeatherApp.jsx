import { useState } from "react"
import { useFetchClima } from "./hooks/useFetchClima"
import { FormUI } from "./FormUI"
import { WeatherCard } from "./WeatherCard"

export const WeatherApp = () => {

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = import.meta.env.VITE_API_KEY
  const difKelvin = 273.15
  const difMetrosSeg = 3.6
  const idiomas = ['es', 'en']

  const [idiomaActual, setIdiomaActual] = useState(idiomas[0])
  const [showDetails, setShowDetails] = useState(false)
  const [ciudad, setCiudad] = useState('')
  const { dataClima, fetchClima } = useFetchClima(urlBase, API_KEY)

  const handleDetails = () => {
    setShowDetails(!showDetails)
  }

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIdiomaActual(idiomas[0])
    if (ciudad.trim().length > 0) fetchClima(ciudad, idiomaActual)
  }

  return (
    <div className="container">
      <h1>El clima de hoy</h1>

      <FormUI
        ciudad={ciudad}
        handleCambioCiudad={handleCambioCiudad}
        handleSubmit={handleSubmit}
      />
      {
        dataClima && (
          <WeatherCard
            dataClima={dataClima}
            difKelvin={difKelvin}
            showDetails={showDetails}
            handleDetails={handleDetails}
            difMetrosSeg={difMetrosSeg}
          />
        )
      }
    </div>
  )
}
