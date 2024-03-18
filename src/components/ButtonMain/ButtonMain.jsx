import styles from './ButtonMain.module.css';
import PropTypes from 'prop-types';

import DropdownActiveImage from './dropdownActive.png';
import DropdownInactiveImage from './dropdownInactive.png';

ButtonMain.propTypes = {
    selectionState: PropTypes.array,
    setSelectionState: PropTypes.any,
    style: PropTypes.string,
    state: PropTypes.string,
    text: PropTypes.string,
    callback: PropTypes.func,
};

function ButtonMain({ setSelectionState, style, state, text, callback }) {
    return (
        <button
            className={`${styles.button} ${styles[state]}`}
            onClick={() => {
                setSelectionState([text, 0])
                callback()
            }}
        >
            <span className={styles.label}>{text}</span>

            {style == 'dropdown' ? (
                state == 'active' ? (
                    <img src={DropdownActiveImage} />
                ) : (
                    <img src={DropdownInactiveImage} />
                )
            ) : null}
        </button>
    );
}

export default ButtonMain;