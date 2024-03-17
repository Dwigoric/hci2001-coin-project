import SettingItem from '../../components/SettingItem/SettingItem.jsx'
import settings from '../options.js'

function settingItemsBuilder(tabIndex, submenuIndex, onSwipe) {
    const tab = settings[tabIndex]
    return (tab.submenu[submenuIndex].items || []).map((setting, i) => {
        return (
            <SettingItem
                key={`${tab.name}-${tab.submenu[submenuIndex].name}-${i}`}
                text={setting.name}
                value={setting.value}
                type={setting.type}
                options={setting.options}
                onSwipe={onSwipe}
            />
        )
    })
}

export default settingItemsBuilder
