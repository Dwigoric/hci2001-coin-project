// Package imports
import PropTypes from 'prop-types'
import styles from './ButtonTab.module.css'

ButtonTab.propTypes = {
    buttonId: PropTypes.number,
    text: PropTypes.string,
    setActive: PropTypes.func,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    alignText: PropTypes.string
}

function ButtonTab({ buttonId, text, setActive, isActive, isDisabled = false, alignText = 'center' }) {

    return (
        <button
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            onClick={isDisabled ? () => null : () => setActive(buttonId)}
        >
            <span className={styles.label} style={{ textAlign: alignText }}>
                {text}
            </span>
        </button>
    )
}

export default ButtonTab
