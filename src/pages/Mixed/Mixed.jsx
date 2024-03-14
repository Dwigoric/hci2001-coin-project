// Package imports
import { useState } from 'react'

// Stylesheets
import styles from './Mixed.module.css'

// Components
import ProfilePanel from '../../components/ProfilePanel/ProfilePanel.jsx'
import ButtonTab from '../../components/ButtonTab/ButtonTab.jsx'
import SettingItem from '../../components/SettingItem/SettingItem.jsx'

// Utils
import Tabs from '../../util/tabs.jsx'
import settings from '../../util/options.jsx'

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

    function settingItemsBuilder(tabIndex, submenuIndex) {
        const tab = settings[tabIndex]
        return (tab.submenu[submenuIndex].options || []).map((setting, i) => {
            return (
                <SettingItem
                    key={`${tab.name}-${tab.submenu[submenuIndex].name}-${i}`}
                    text={setting.name}
                    value={setting.value}
                    type={setting.type}
                    options={setting.options}
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
        const buttons = firstLevelButtonBuilder(index)
        setFirstLevelButtons(buttons)
        changeActiveSubmenu(index, 0)
    }

    function changeActiveSubmenu(tabIndex, submenuIndex) {
        setSubmenuButtons(secondLevelButtonBuilder(tabIndex, submenuIndex))
        setSettingItems(settingItemsBuilder(tabIndex, submenuIndex))
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
