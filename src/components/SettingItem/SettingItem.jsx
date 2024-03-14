// Package imports
import PropTypes from 'prop-types'

// Stylesheets
import styles from './SettingItem.module.css'

SettingItem.propTypes = {
    text: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
}

function SettingItem({ text, value, type, options }) {
    return (
        <div className={styles.settingItem}>
            <div>
                {text}
            </div>
            <div>
                {value}
            </div>
        </div>
    )
}

export default SettingItem
