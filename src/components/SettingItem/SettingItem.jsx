// Package imports
import PropTypes from 'prop-types'
import Carousel from 'react-slick'
import { Slider } from '@mui/material'

// Stylesheets
import styles from './SettingItem.module.css'

// Utils
import logger from '../../util/logger.js'

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
    function typeBuilder(text, value, type, options = []) {
        switch (type) {
            case 'enum':
                return (
                    <Carousel
                        afterChange={onSettingChange}
                        speed={type === 'enum' ? 300 : 0}
                        infinite={type === 'enum'}
                        {...carouselSettings}
                    >
                        {optionsBuilder(type, options)}
                    </Carousel>
                )
            case 'slider':
                return (
                    <Slider
                        size="large"
                        defaultValue={50}
                        onChangeCommitted={(event, value) => logger.log({
                            action: 'CHANGE_SLIDER_VALUE',
                            message: `${text}: ${value}`
                        })}
                    />
                )
            case 'info':
                return (
                    <div style={{ textAlign: 'right', transform: 'translate(8%, 0)' }}>{value}</div>
                )
        }
    }

    if (typeof value !== 'undefined') {
        // Move the selected value to the first index
        const index = options.indexOf(value)
        // Shift the array to the left by the index
        if (index !== -1) options = options.slice(index).concat(options.slice(0, index))
    }

    function optionsBuilder(type, options) {
        return options.map((option) => (
            <div key={`${text}-${option}`}>
                {option}
            </div>
        ))
    }

    function onSettingChange(newIndex) {
        if (type === 'enum') callback({ name: text, data: options[newIndex] })
        else callback({ name: text, data: newIndex })
    }

    return (
        <div className={styles.settingItem}>
            <div>{text}</div>
            <div className={styles.settingModifier}>{typeBuilder(text, value, type, options)}</div>
        </div>
    )
}

export default SettingItem
