import Tabs from './tabs.jsx'

const settings = [
    {
        name: Tabs.ONLINE,
        submenu: []
    },
    {
        name: Tabs.FRIENDS,
        submenu: []
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
        submenu: []
    }
]

export default settings