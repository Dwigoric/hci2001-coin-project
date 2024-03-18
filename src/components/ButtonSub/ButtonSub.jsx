import styles from './ButtonSub.module.css';
import PropTypes from 'prop-types';

ButtonSub.propTypes = {
    selectionState: PropTypes.array,
    setSelectionState: PropTypes.any,
    state: PropTypes.string,
    text: PropTypes.string,
    callback: PropTypes.func,
};

function ButtonSub({ selectionState, setSelectionState, state, text, callback }) {
    return (
        <button
            className={`${styles.button} ${styles[state]}`}
            onClick={() => {
                setSelectionState([selectionState[0], text])
                callback()
            }}
        >
            <span className={styles.label}>{text}</span>
        </button>
    );
}

export default ButtonSub;