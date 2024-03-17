// Package imports
import PropTypes from 'prop-types'
import Carousel from 'react-slick'

// Stylesheets
import styles from './SettingItem.module.css'

// Prop types
SettingItem.propTypes = {
    text: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    callback: PropTypes.func
}

// Constants and functions
const carouselSettings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
}

function SettingItem({ text, value, type, options = [], callback = () => null }) {
    if (typeof value !== 'undefined') {
        // Move the selected value to the first index
        const index = options.indexOf(value)
        // Shift the array to the left by the index
        if (index !== -1) options = options.slice(index).concat(options.slice(0, index))
    }

    function optionsBuilder(type, options) {
        if (type === 'enum') return options.map((option) => (
            <div key={`${text}-${option}`}>
                {option}
            </div>
        ))

        return Array(11).fill().map((_, i) => (
            <div key={`${text}-${i}`} className={`${styles[`slider${i}`]} ${styles.slider}`}>
                {/* TODO: Use rectangles? */}
                {/*<div className={styles.activatedRectangle} />*/}
                {/*<div className={styles.deactivatedRectangle} />*/}
                {i /* Temporary */}
            </div>
        ))
    }

    function onSettingChange(newIndex) {
        if (type === 'enum') callback({ name: text, data: options[newIndex] })
        else callback({ name: text, data: newIndex })
    }

    return (
        <div className={styles.settingItem}>
            <div>
                {text}
            </div>
            <div className={styles.settingModifier}>
                <Carousel afterChange={onSettingChange} speed={type === 'enum' ? 300 : 0}
                          infinite={type === 'enum'} {...carouselSettings}>
                    {optionsBuilder(type, options)}
                </Carousel>
            </div>
        </div>
    )
}

export default SettingItem
