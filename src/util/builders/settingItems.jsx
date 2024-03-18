import SettingItem from '../../components/SettingItem/SettingItem.jsx'
import settings from '../options.js'

function settingItemsBuilder(firstLevel, secondLevel, callback) {
    let tab
    if (typeof firstLevel === 'string') tab = settings.find(setting => setting.name === firstLevel)
    else tab = settings[firstLevel]

    let submenu
    if (typeof secondLevel === 'string') submenu = tab.submenu.find(setting => setting.name === secondLevel)
    else submenu = tab.submenu[secondLevel]

    return (submenu.items || []).map((setting, i) => {
        return (
            <SettingItem
                key={`${tab.name}-${submenu.name}-${i}`}
                text={setting.name}
                value={setting.value}
                type={setting.type}
                options={setting.options}
                callback={callback}
            />
        )
    })
}

export default settingItemsBuilder
