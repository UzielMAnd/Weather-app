import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export const WeatherCard = ({ dataClima, difKelvin, difMetrosSeg, showDetails, handleDetails }) => {
    const { t } = useTranslation()

    return (
        <div className={`card border-primary custom-card ${showDetails ? 'custom-card-expanded' : 'custom-card-collapsed'}`}>
            <div className="card-body">
                <div className={showDetails ? "row" : ""}>
                    <h2 className="card-title">{dataClima.name}</h2>
                    <div className={showDetails ? "col-md-6" : ""}>
                        <p className="card-text">{t('temperature')}: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
                        <p className="card-text">{t('feelsLike')}: {parseInt(dataClima?.main?.feels_like - difKelvin)}°C</p>
                        <p className="card-text">{parseInt(dataClima?.main?.temp_max - difKelvin)}°C / {parseInt(dataClima?.main?.temp_min - difKelvin)}°C</p>
                        <p className="card-text">{t('windSpeed')}: {parseInt(dataClima?.wind?.speed * difMetrosSeg)} km/h</p>
                    </div>
                    {showDetails && (
                        <>
                            <div className="col-md-6 cce-text">
                                <p className="card-text">{t('humidity')}: {dataClima.main.humidity} %</p>
                                <p className="card-text">{t('pressure')}: {dataClima.main.pressure} hPa</p>
                                <p className="card-text">{t('sunrise')}: {new Date(dataClima.sys.sunrise * 1000).toLocaleTimeString("es-MX")}</p>
                                <p className="card-text">{t('sunset')}: {new Date(dataClima.sys.sunset * 1000).toLocaleTimeString("es-MX")}</p>
                            </div>
                        </>
                    )}
                    <img
                        className="img-icon"
                        src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
                        alt="Icono del clima"
                    />
                    <p className="card-text">{dataClima.weather[0].description.charAt(0).toUpperCase() + dataClima.weather[0].description.slice(1)}</p>
                </div>
                <br />
                <button type="button" onClick={handleDetails} className="btn btn-info">
                    {showDetails ? t('hideDetailsButton') : t('showDetailsButton')}
                </button>
            </div>
        </div>
    )
}

WeatherCard.propTypes = {
    dataClima: PropTypes.object.isRequired,
    difKelvin: PropTypes.number.isRequired,
    difMetrosSeg: PropTypes.number.isRequired,
    showDetails: PropTypes.bool.isRequired,
    handleDetails: PropTypes.func.isRequired
}