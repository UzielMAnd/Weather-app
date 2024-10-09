import { useState } from "react"

export const useFetchClima = (urlBase, API_KEY) => {
    const [dataClima, setDataClima] = useState(null)

    const fetchClima = async (ciudad, idioma) => {
        if (!ciudad) {
            console.log("Valor undefined o vacío")
            return
        }
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}&lang=${idioma}`)
            const data = await response.json()
            setDataClima(data)
        }
        catch (error) {
            console.error('Ocurrió el siguiente problema: ', error)
        }
    }

    return { dataClima, fetchClima }
}
