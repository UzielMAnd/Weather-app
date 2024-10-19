import { useState, useEffect } from "react"
import { useFetchClima } from "./hooks/useFetchClima"
import { FormUI } from "./FormUI"
import { WeatherCard } from "./WeatherCard"
import { LanguageSelector } from "./LanguageSelector"
import { useTranslation } from "react-i18next"

export const WeatherApp = () => {

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = import.meta.env.VITE_API_KEY
  const difKelvin = 273.15
  const difMetrosSeg = 3.6

  const { i18n: { changeLanguage, language }, t } = useTranslation()
  const [idiomaActual, setIdiomaActual] = useState(language)
  const [showDetails, setShowDetails] = useState(false)
  const [ciudad, setCiudad] = useState('')
  const { dataClima, fetchClima } = useFetchClima(urlBase, API_KEY)

  useEffect(() =>{
    document.title = t('weatherAppTitle')
  }, [t])

  const handleChangeLanguage = (e) => {
    const newLanguage = e.target.value
    setIdiomaActual(newLanguage)
    changeLanguage(newLanguage)
  }

  const handleDetails = () => {
    setShowDetails(!showDetails)
  }

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ciudad.trim().length > 0) fetchClima(ciudad, idiomaActual)
  }

  return (
    <div className="container">
      <h1>{t('header')}</h1>

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

      <div className="language-button">
        <LanguageSelector
          idiomaActual={idiomaActual}
          handleChangeLanguage={handleChangeLanguage}
        />
      </div>
    </div>
  )
}
