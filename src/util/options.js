import Tabs from './tabs.js'

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
                items: [
                    {
                        name: 'Mouse Input Method',
                        type: 'enum',
                        options: ['Raw Input', 'Direct Input'],
                        value: 'Direct Input'
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
                name: 'Career',
                items: [
                    {
                        name: 'Global RP',
                        type: 'info',
                        value: '1,234,567'
                    },
                    {
                        name: 'Overall income',
                        type: 'info',
                        value: '$12,345,678'
                    },
                    {
                        name: 'Overall expenses',
                        type: 'info',
                        value: '$1,234,567'
                    },
                    {
                        name: 'Total players killed (Instanced)',
                        type: 'info',
                        value: '123'
                    },
                    {
                        name: 'Total death by players (Instanced)',
                        type: 'info',
                        value: '123'
                    },
                    {
                        name: 'Competitive player kill/death ratio',
                        type: 'info',
                        value: '1.23'
                    },
                    {
                        name: 'Distance traveled',
                        type: 'info',
                        value: '123.45 kilometers'
                    },
                    {
                        name: 'Favorite radio station',
                        type: 'info',
                        value: 'Los Santos Rock Radio'
                    },
                    {
                        name: 'Time spent in GTA Online',
                        type: 'info',
                        value: '123d 12h 34m 56s'
                    },
                    {
                        name: 'Time played in first person',
                        type: 'info',
                        value: '12d 3h 45m 6s'
                    },
                    {
                        name: 'Time spent in Deathmatches',
                        type: 'info',
                        value: '1d 2h 3m 4s'
                    },
                    {
                        name: 'Time spent in races',
                        type: 'info',
                        value: '12h 34m 56s'
                    },
                    {
                        name: 'Time spent in the Creator',
                        type: 'info',
                        value: '1h 23m 45s'
                    },
                    {
                        name: 'Deathmatches published',
                        type: 'info',
                        value: '0'
                    }
                ]
            },
            {
                name: 'General',
                items: [
                    {
                        name: 'Time played as character',
                        type: 'info',
                        value: '12d 3h 45m 6s'
                    },
                    {
                        name: 'Character created',
                        type: 'info',
                        value: '2030 / 12 / 31'
                    },
                    {
                        name: 'Last ranked up',
                        type: 'info',
                        value: '2034 / 12 / 31'
                    },
                    {
                        name: 'Longest single game session',
                        type: 'info',
                        value: '6h 12m 34s'
                    },
                    {
                        name: 'Average time per session',
                        type: 'info',
                        value: '1h 23m 45s'
                    },
                    {
                        name: 'Total deaths',
                        type: 'info',
                        value: '1,234'
                    },
                    {
                        name: 'Deaths by explosion',
                        type: 'info',
                        value: '234'
                    },
                    {
                        name: 'Deaths by falling',
                        type: 'info',
                        value: '23'
                    },
                    {
                        name: 'Deaths by fire',
                        type: 'info',
                        value: '12'
                    },
                    {
                        name: 'Deaths by traffic',
                        type: 'info',
                        value: '56'
                    },
                    {
                        name: 'Deaths by drowning',
                        type: 'info',
                        value: '8'
                    },
                    {
                        name: 'Time swimming',
                        type: 'info',
                        value: '6h 12m 34s'
                    },
                    {
                        name: 'Distance travelled swimming',
                        type: 'info',
                        value: '123.45 kilometers'
                    },
                    {
                        name: 'Time underwater',
                        type: 'info',
                        value: '12h 34m 56s'
                    }
                ]
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
            }
        ]
    }
]

export default settings