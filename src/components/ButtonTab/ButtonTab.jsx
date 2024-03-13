// Package imports
import PropTypes from 'prop-types'
import styles from './ButtonTab.module.css'

ButtonTab.propTypes = {
    buttonId: PropTypes.number,
    text: PropTypes.string,
    setActive: PropTypes.func,
    isActive: PropTypes.bool
}

function ButtonTab({ buttonId, text, setActive, isActive }) {

    return (
        <button
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            onClick={() => setActive(buttonId)}
        >
            <span className={styles.label}>{text}</span>
        </button>
    )
}

export default ButtonTab
