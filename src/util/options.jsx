import Tabs from './tabs.jsx'

const settings = [
    {
        name: Tabs.ONLINE,
        submenu: [
            {
                name: 'Jobs'
            },
            {
                name: 'Join Friends',
                disabled: true
            },
            {
                name: 'Join Crew Members',
                disabled: true
            },
            {
                name: 'Playlists',
                disabled: true
            },
            {
                name: 'Players',
                disabled: true
            },
            {
                name: 'Crews',
                disabled: true
            },
            {
                name: 'Creator',
                disabled: true
            },
            {
                name: 'Swap Character',
                disabled: true
            },
            {
                name: 'Purchase Shark Cards',
                disabled: true
            },
            {
                name: 'Criminal Enterprise Starter Pack',
                disabled: true
            },
            {
                name: 'Options',
                disabled: true
            },
            {
                name: 'Find New Session',
                disabled: true
            },
            {
                name: 'Leave GTA Online',
                disabled: true
            },
            {
                name: 'Credits & Legal',
                disabled: true
            },
            {
                name: 'Exit Game',
                disabled: true
            }
        ]
    },
    {
        name: Tabs.FRIENDS,
        submenu: [
            {
                name: 'Ralph',
                disabled: true
            },
            {
                name: 'Errol',
                disabled: true
            },
            {
                name: 'Joshua',
                disabled: true
            },
            {
                name: 'Yna',
                disabled: true
            },
            {
                name: 'Glee',
                disabled: true
            },
            {
                name: 'Erika',
                disabled: true
            }
        ]
    },
    {
        name: Tabs.SETTINGS,
        submenu: [
            {
                name: 'Gamepad'
            },
            {
                name: 'Keyboard / Mouse',
                options: [
                    {
                        name: 'Mouse Input Method',
                        type: 'enum'
                    },
                    {
                        name: 'Mouse Look Sensitivity',
                        type: 'slider'
                    }
                ]
            },
            {
                name: 'Key Bindings'
            },
            {
                name: 'Audio'
            },
            {
                name: 'Camera'
            },
            {
                name: 'Display'
            },
            {
                name: 'Graphics'
            },
            {
                name: 'Advanced Graphics'
            },
            {
                name: 'Voice Chat'
            },
            {
                name: 'Notifications'
            },
            {
                name: 'Rockstar Editor'
            },
            {
                name: 'Saving And Startup'
            }
        ]
    },
    {
        name: Tabs.STATS,
        submenu: [
            {
                name: 'Career'
            },
            {
                name: 'Skills'
            },
            {
                name: 'General'
            },
            {
                name: 'Crimes'
            },
            {
                name: 'Vehicles'
            },
            {
                name: 'Cash'
            },
            {
                name: 'Combat'
            },
            {
                name: 'Weapons'
            },
            {
                name: 'Awards'
            },
            {
                name: 'Unlocks'
            }
        ]
    }
]

export default settings