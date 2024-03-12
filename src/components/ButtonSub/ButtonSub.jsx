import styles from './ButtonSub.module.css';
import PropTypes from 'prop-types';

ButtonSub.propTypes = {
    selectionState: PropTypes.array,
    setSelectionState: PropTypes.any,
    state: PropTypes.string,
    text: PropTypes.string,
};

function ButtonSub({ selectionState, setSelectionState, state, text }) {
    return (
        <button
            className={`${styles.button} ${styles[state]}`}
            onClick={() => setSelectionState([selectionState[0], text])}
        >
            <span className={styles.label}>{text}</span>
        </button>
    );
}

export default ButtonSub;