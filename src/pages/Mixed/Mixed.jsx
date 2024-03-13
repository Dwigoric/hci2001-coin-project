// Package imports
import { useState } from 'react'

// Stylesheets
import styles from './Mixed.module.css'

// Components
import ProfilePanel from '../../components/ProfilePanel/ProfilePanel.jsx'
import ButtonTab from '../../components/ButtonTab/ButtonTab.jsx'

// Utils
import Tabs from '../../util/tabs.jsx'

function Mixed() {
    const newButtons = Object.keys(Tabs).map((tab, i) => {
        return (
            <ButtonTab
                key={i}
                buttonId={i}
                text={tab}
                setActive={changeActiveTab}
                isActive={i === 0}
            />
        )
    })

    const [firstLevelButtons, setFirstLevelButtons] = useState(newButtons)

    function changeActiveTab(index) {
        const buttons = Object.keys(Tabs).map((tab, i) => {
            return (
                <ButtonTab
                    key={i}
                    buttonId={i}
                    text={tab}
                    setActive={changeActiveTab}
                    isActive={i === index}
                />
            )
        })
        setFirstLevelButtons(buttons)
    }

    return (
        <div className={styles.mixedPage}>
            <div className={styles.settingsPanel}>
                <ProfilePanel />
                <div className={styles.firstLevelTabs}>
                    {firstLevelButtons}
                </div>
            </div>
        </div>
    )
}

export default Mixed
