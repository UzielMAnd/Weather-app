import PropTypes from 'prop-types'

export const LanguageSelector = ({ idiomaActual, handleChangeLanguage }) => {
    const idiomas = ['es', 'en', 'fr']

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id='languageDropdown'>
                {idiomaActual.toUpperCase()}
            </button>
            <ul className="dropdown-menu" aria-labelledby='languageDropdown'>
                {idiomas.map((lang) => (
                    <li key={lang}>
                        <a className={`dropdown-item ${lang === idiomaActual ? 'active' : ''}`} href="#" onClick={() => handleChangeLanguage({ target: { value: lang } })}>
                            {lang.toUpperCase()}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

LanguageSelector.propTypes = {
    idiomaActual: PropTypes.string.isRequired,
    handleChangeLanguage: PropTypes.func.isRequired
}