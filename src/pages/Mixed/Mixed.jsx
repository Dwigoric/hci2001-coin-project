// Package imports
import { useState } from 'react'

// Stylesheets
import styles from './Mixed.module.css'

// Components
import ProfilePanel from '../../components/ProfilePanel/ProfilePanel.jsx'
import ButtonTab from '../../components/ButtonTab/ButtonTab.jsx'

// Utils
import Tabs from '../../util/tabs.js'
import settings from '../../util/options.js'
import settingItemsBuilder from '../../util/builders/settingItems.jsx'
import logger from '../../util/logger.js'

function Mixed() {
    function firstLevelButtonBuilder(index) {
        return Object.keys(Tabs).map((tab, i) => {
            return (
                <ButtonTab
                    key={tab}
                    buttonId={i}
                    text={tab}
                    setActive={changeActiveTab}
                    isActive={i === index}
                />
            )
        })
    }

    function secondLevelButtonBuilder(tabIndex, submenuIndex) {
        const tab = settings[tabIndex]
        return tab.submenu.map((sub, i) => {
            return (
                <ButtonTab
                    key={`${tab.name}-${i}`}
                    buttonId={i}
                    text={sub.name}
                    setActive={() => changeActiveSubmenu(tabIndex, i)}
                    isActive={i === submenuIndex && !sub.disabled}
                    isDisabled={typeof sub.disabled === 'undefined' ? false : sub.disabled}
                    alignText="left"
                />
            )
        })
    }

    const newButtons = firstLevelButtonBuilder(0)
    const newSubmenu = secondLevelButtonBuilder(0, 0)
    const newSettingItems = settingItemsBuilder(0, 0)

    const [firstLevelButtons, setFirstLevelButtons] = useState(newButtons)
    const [submenuButtons, setSubmenuButtons] = useState(newSubmenu)
    const [settingItems, setSettingItems] = useState(newSettingItems)

    function changeActiveTab(index) {
        logger.log({ action: 'CHANGE_TAB', message: Object.keys(Tabs)[index] })
        const buttons = firstLevelButtonBuilder(index)
        setFirstLevelButtons(buttons)
        changeActiveSubmenu(index, 0)
    }

    function changeActiveSubmenu(tabIndex, submenuIndex) {
        logger.log({ action: 'CHANGE_SUBMENU', message: settings[tabIndex].submenu[submenuIndex].name })
        setSubmenuButtons(secondLevelButtonBuilder(tabIndex, submenuIndex))
        setSettingItems(settingItemsBuilder(tabIndex, submenuIndex, ({ name, data }) => {
            logger.log({ action: 'CHANGE_SETTING', message: `${name}: ${data}` })
        }))
    }

    return (
        <div className={styles.mixedPage}>
            <div className={styles.settingsPanel}>
                <ProfilePanel />
                <div className={styles.firstLevelTabs}>
                    {firstLevelButtons}
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.granularSettings}>
                    <div className={styles.secondLevelTabs}>
                        {submenuButtons}
                    </div>
                    <div className={styles.settingsThemselves}>
                        {settingItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mixed
