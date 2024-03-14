import SettingItem from '../../components/SettingItem/SettingItem.jsx'
import settings from '../options.jsx'

function settingItemsBuilder(tabIndex, submenuIndex) {
    const tab = settings[tabIndex]
    return (tab.submenu[submenuIndex].items || []).map((setting, i) => {
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

export default settingItemsBuilder
