import PropTypes from 'prop-types'

export const WeatherCard = ({ dataClima, difKelvin, difMetrosSeg, showDetails, handleDetails }) => {
    return (
        <div className={`card border-primary custom-card ${showDetails ? 'custom-card-expanded' : 'custom-card-collapsed'}`}>
            <div className="card-body">
                <div className={showDetails ? "row" : ""}>
                    <h2 className="card-title">{dataClima.name}</h2>
                    <div className={showDetails ? "col-md-6" : ""}>
                        <p className="card-text">Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
                        <p className="card-text">Sensación térmica: {parseInt(dataClima?.main?.feels_like - difKelvin)}°C</p>
                        <p className="card-text">{parseInt(dataClima?.main?.temp_max - difKelvin)}°C / {parseInt(dataClima?.main?.temp_min - difKelvin)}°C</p>
                        <p className="card-text">Viento: {parseInt(dataClima?.wind?.speed * difMetrosSeg)} km/h</p>
                    </div>
                    {showDetails && (
                        <>
                            <div className="col-md-6">
                                <p className="card-text">Humedad: {dataClima.main.humidity} %</p>
                                <p className="card-text">Presión: {dataClima.main.pressure} hPa</p>
                                <p className="card-text">Amanecer: {new Date(dataClima.sys.sunrise * 1000).toLocaleTimeString("es-MX")}</p>
                                <p className="card-text">Atardecer: {new Date(dataClima.sys.sunset * 1000).toLocaleTimeString("es-MX")}</p>
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
                    {showDetails ? "Ocultar detalles" : "Mostrar detalles"}
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