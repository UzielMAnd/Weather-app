import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export const FormUI = ({ ciudad, handleCambioCiudad, handleSubmit }) => {
    const { t } = useTranslation()

    return (
        <form onSubmit={handleSubmit} id="busqueda">
            <input type="text" value={ciudad} onChange={handleCambioCiudad} placeholder={t('searchPlaceholder')} id="barraBusqueda" />
            <button type="submit">{t('search')}</button>
        </form>
    )
}

FormUI.propTypes = {
    ciudad: PropTypes.string.isRequired,
    handleCambioCiudad: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}