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
    onSwipe: PropTypes.func
}

// Constants and functions
const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

function optionsBuilder(options) {
    return options.map((option) => {
        return (
            <div key={option}>
                {option}
            </div>
        )
    })
}

function SettingItem({ text, value, type, options = [], onSwipe = () => null }) {
    if (typeof value !== 'undefined') {
        // Move the selected value to the first index
        const index = options.indexOf(value)
        options.splice(index, 1)
        options.unshift(value)
    }

    const modifier = type === 'enum' ? (
        <Carousel beforeChange={onSwipe} {...carouselSettings}>
            {optionsBuilder(options)}
        </Carousel>
    ) : (
        // TODO: Slider
        <></>
    )

    return (
        <div className={styles.settingItem}>
            <div>
                {text}
            </div>
            <div className={styles.settingModifier}>
                {modifier}
            </div>
        </div>
    )
}

export default SettingItem
