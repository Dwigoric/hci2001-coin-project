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
    const newButtons = Object.keys(Tabs).map((tab, i) => {
        return (
            <ButtonTab
                key={tab}
                buttonId={i}
                text={tab}
                setActive={changeActiveTab}
                isActive={i === 0}
            />
        )
    })

    const newSubmenu = settings[0].submenu.map((sub, i) => {
        return (
            <ButtonTab
                key={`${settings[0].name}-${i}`}
                buttonId={i}
                text={sub.name}
                setActive={() => changeActiveSubmenu(0, i)}
                isActive={i === 0 && !sub.disabled}
                isDisabled={typeof sub.disabled === 'undefined' ? false : sub.disabled}
                alignText="left"
            />
        )
    })

    const newSettingItems = (settings[0].submenu[0].options || []).map((setting, i) => {
        return (
            <SettingItem
                key={`${settings[0].name}-${settings[0].submenu[0].name}-${i}`}
                text={setting.name}
                value={setting.value}
                type={setting.type}
                options={setting.options}
            />
        )
    })

    const [firstLevelButtons, setFirstLevelButtons] = useState(newButtons)
    const [submenuButtons, setSubmenuButtons] = useState(newSubmenu)
    const [settingItems, setSettingItems] = useState(newSettingItems)

    function changeActiveTab(index) {
        const buttons = Object.keys(Tabs).map((tab, i) => {
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
        setFirstLevelButtons(buttons)
        changeActiveSubmenu(index, 0)
    }

    function changeActiveSubmenu(tabIndex, submenuIndex) {
        const tab = settings[tabIndex]
        const buttons = tab.submenu.map((sub, i) => {
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
        setSubmenuButtons(buttons)
        setSettingItems((tab.submenu[submenuIndex].options || []).map((setting, i) => {
            return (
                <SettingItem
                    key={`${tab.name}-${tab.submenu[submenuIndex].name}-${i}`}
                    text={setting.name}
                    value={setting.value}
                    type={setting.type}
                    options={setting.options}
                />
            )
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
