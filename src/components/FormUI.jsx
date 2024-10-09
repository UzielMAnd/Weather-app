import PropTypes from 'prop-types'

export const FormUI = ({ ciudad, handleCambioCiudad, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} id="busqueda">
            <input type="text" value={ciudad} onChange={handleCambioCiudad} placeholder="Ingresa la ciudad" id="barraBusqueda" />
            <button type="submit">Buscar</button>
        </form>
    )
}

FormUI.propTypes = {
    ciudad: PropTypes.string.isRequired,
    handleCambioCiudad: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}