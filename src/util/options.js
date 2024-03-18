import Tabs from './tabs.js'

const settings = [
    {
        name: Tabs.ONLINE,
        submenu: [
            { name: 'Jobs' },
            { name: 'Join Friends' },
            { name: 'Join Crew Members' },
            { name: 'Playlists' },
            { name: 'Players' },
            { name: 'Crews' },
            { name: 'Creator' },
            { name: 'Swap Character' },
            { name: 'Purchase Shark Cards' },
            { name: 'Criminal Enterprise Starter Pack' },
            {
                name: 'Options',
                items: [
                    {
                        name: 'Enable Passive Mode',
                        type: 'info',
                        value: ''
                    },
                    {
                        name: 'Quickplay Action (On Foot)',
                        type: 'enum',
                        options: [
                            'Air Thrusting',
                            'Blow Kiss',
                            'Dock',
                            'Jerk',
                            'Knuckle Crunch',
                            'Slow Clap',
                            'Face Palm',
                            'Thumbs Up',
                            'Jazz Hands',
                            'Nose Pick'
                        ]
                    },
                    {
                        name: 'Joint Celebration',
                        type: 'enum',
                        options: [
                            'High Five',
                            'Cowering',
                            'Sarcastic',
                            'Bro Hug',
                            'Handshake',
                            'Fist Bump',
                            'Back Slap'
                        ]
                    },
                    {
                        name: 'Facial Expression (Normal)',
                        type: 'enum',
                        options: [
                            'Smug',
                            'Sulking',
                            'Aiming',
                            'Angry',
                            'Happy',
                            'Injured',
                            'Normal',
                            'Stressed'
                        ]
                    },
                    {
                        name: 'Facial Expression (Race)',
                        type: 'enum',
                        value: 'Happy',
                        options: [
                            'Smug',
                            'Sulking',
                            'Aiming',
                            'Angry',
                            'Happy',
                            'Injured',
                            'Normal',
                            'Stressed'
                        ]
                    },
                    {
                        name: 'Facial Expression (Deathmatch)',
                        type: 'enum',
                        value: 'Angry',
                        options: [
                            'Smug',
                            'Sulking',
                            'Aiming',
                            'Angry',
                            'Happy',
                            'Injured',
                            'Normal',
                            'Stressed'
                        ]
                    },
                    {
                        name: 'Allow Spectators',
                        type: 'enum',
                        value: 'On',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Matchmaking',
                        type: 'enum',
                        value: 'Closed',
                        options: ['Open', 'Closed']
                    },
                    {
                        name: 'Spawn Location',
                        type: 'enum',
                        options: [
                            'Last Location',
                            'Random',
                            'Private Yacht',
                            'Maze Bank West',
                            'Great Chaparral Clubhouse',
                            'Paleto Forest Bunker',
                            'Hangar',
                            'Facility',
                            'Nightclub',
                            'Kosatka',
                            'Agency'
                        ]
                    },
                    {
                        name: 'Player Rank Title',
                        type: 'enum',
                        options: ['Default', 'Crew']
                    },
                    {
                        name: 'Betting Odds Format',
                        type: 'enum',
                        options: ['Fractional', 'Decimal', 'Moneyline']
                    },
                    {
                        name: 'Player Overhead Display',
                        type: 'enum',
                        options: ['Nickname', 'Nickname & Crew', 'Marker Only', 'None']
                    },
                    {
                        name: 'Remain Host after Next Job Vote Screen',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Filter Quick Join Content',
                        type: 'enum',
                        options: ['Any', 'Rockstar Created Only', 'User Created Only']
                    }
                ]
            },
            { name: 'Find New Session' },
            { name: 'Leave GTA Online' },
            { name: 'Credits & Legal' },
            { name: 'Exit Game' }
        ]
    },
    {
        name: Tabs.FRIENDS,
        submenu: [
            { name: 'Ralph' },
            { name: 'Errol' },
            { name: 'Joshua' },
            { name: 'Yna' },
            { name: 'Glee' },
            { name: 'Erika' }
        ]
    },
    {
        name: Tabs.SETTINGS,
        submenu: [
            { name: 'Gamepad' },
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
                    },
                    {
                        name: 'Mouse Smoothing Scale',
                        type: 'slider'
                    },
                    {
                        name: 'Fine Aiming Control',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Invert Mouse Look',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'off']
                    },
                    {
                        name: 'Toggle Aim',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'First Person Aim Type',
                        type: 'enum',
                        options: ['Normal', 'Iron Sights']
                    },
                    {
                        name: 'Default Mouse Driving Control',
                        type: 'enum',
                        options: ['Camera', 'Vehicle', 'Off']
                    },
                    {
                        name: 'Default Mouse Flying Control',
                        type: 'enum',
                        options: ['Camera', 'Vehicle', 'Off']
                    },
                    {
                        name: 'Default Mouse Submarine Control',
                        type: 'enum',
                        options: ['Camera', 'Vehicle', 'Off']
                    },
                    {
                        name: 'Mouse Driving Sensitivity',
                        type: 'slider'
                    },
                    {
                        name: 'Mouse Plane Sensitivity',
                        type: 'slider'
                    },
                    {
                        name: 'Mouse Heli Sensitivity',
                        type: 'slider'
                    },
                    {
                        name: 'Mouse Submarine Sensitivity',
                        type: 'slider'
                    }
                ]
            },
            { name: 'Key Bindings' },
            {
                name: 'Audio',
                items: [
                    {
                        name: 'SFX Volume',
                        type: 'slider'
                    },
                    {
                        name: 'Music Volume',
                        type: 'slider'
                    },
                    {
                        name: 'Dialogue Boost',
                        type: 'slider'
                    },
                    {
                        name: 'Radio Station',
                        type: 'enum',
                        options: [
                            'Los Santos Rock Radio',
                            'Non-Stop-Pop FM',
                            'Radio Mirror Park',
                            'Rebel Radio',
                            'Soulwax FM',
                            'Space 103.2',
                            'The Blue Ark',
                            'The Lowdown 91.1',
                            'The Lab',
                            'WorldWide FM'
                        ]
                    },
                    {
                        name: 'Self Radio Mode',
                        type: 'enum',
                        options: ['Radio', 'Sequential', 'Random']
                    },
                    {
                        name: 'Auto-Scan for Music',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Perform Quick Scan for Music',
                        type: 'info',
                        value: ''
                    },
                    {
                        name: 'Perform Full Scan for Music',
                        type: 'info',
                        value: ''
                    },
                    {
                        name: 'Output',
                        type: 'enum',
                        options: ['Stereo', 'Surround', 'Surround 5.1', 'Surround 7.1']
                    }
                ]
            },
            {
                name: 'Camera',
                items: [
                    {
                        name: 'Allow Independent Camera Modes',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Vehicle Camera Height',
                        type: 'enum',
                        options: ['Low', 'High']
                    },
                    {
                        name: 'First Person Auto Level Camera',
                        type: 'enum',
                        value: 'On'
                    },
                    {
                        name: 'First Person On Foot Field of View',
                        type: 'slider'
                    },
                    {
                        name: 'First Person Ragdoll',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'First Person Combat Roll',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'First Person Head Bobbing',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'First Person Third Person Cover',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'First Person Vehicle Auto-Center',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'First Person Vehicle Hood',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'First Person Drive-By Camera Relative to Vehicle',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Restore Defaults',
                        type: 'info',
                        value: ''
                    }
                ]
            },
            {
                name: 'Display',
                items: [
                    {
                        name: 'Radar',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'HUD',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Weapon Target',
                        type: 'enum',
                        options: ['Simple', 'Complex']
                    },
                    {
                        name: 'Simple Reticule Size',
                        type: 'slider'
                    },
                    {
                        name: 'GPS Route',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Expanded Radar',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Player Overhead Display',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Display Text Chat',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Safezone Size',
                        type: 'slider'
                    },
                    {
                        name: 'Screen Kill Effects',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Subtitles',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Measurement System',
                        type: 'enum',
                        options: ['Metric', 'Imperial']
                    }
                ]
            },
            {
                name: 'Graphics',
                items: [
                    {
                        name: 'Ignore Suggested Limits',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'DirectX Version',
                        type: 'enum',
                        options: ['DirectX 10', 'DirectX 10.1', 'DirectX 11']
                    },
                    {
                        name: '',
                        type: 'info',
                        value: ''
                    },
                    {
                        name: 'Screen Type',
                        type: 'enum',
                        options: ['Windowed', 'Windowed Borderless', 'Fullscreen']
                    },
                    {
                        name: 'Resolution',
                        type: 'enum',
                        options: ['800x600', '1024x768', '1280x720', '1366x768', '1600x900', '1920x1080', '2560x1440', '3840x2160']
                    },
                    {
                        name: 'Aspect Ratio',
                        type: 'enum',
                        options: ['Auto', '4:3', '5:4', '16:9', '16:10', '21:9']
                    },
                    {
                        name: 'Refresh Rate',
                        type: 'enum',
                        options: ['Auto', '24Hz', '30Hz', '60Hz', '120Hz', '144Hz', '240Hz']
                    },
                    {
                        name: 'Output Monitor',
                        type: 'enum',
                        options: ['1', '2', '3', '4']
                    },
                    {
                        name: '',
                        type: 'info',
                        value: ''
                    },
                    {
                        name: 'FXAA',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'MSAA',
                        type: 'enum',
                        options: ['Off', '2x', '4x', '8x']
                    },
                    {
                        name: 'NVIDIA TXAA',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'VSync',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Pause Game On Focus Loss',
                        type: 'enum',
                        options: ['On', 'Off']
                    }
                ]
            },
            {
                name: 'Advanced Graphics',
                items: [
                    {
                        name: 'Long Shadows',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'High Resolution Shadows',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'High Detail Streaming While Flying',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Extended Scaling Distance',
                        type: 'slider'
                    },
                    {
                        name: 'Extended Shadows Distance',
                        type: 'slider'
                    },
                    {
                        name: 'Frame Scaling Mode',
                        type: 'enum',
                        options: [
                            'Off',
                            '1/2 (x0.500)',
                            '2/3 (x0.667)',
                            '3/4 (x0.750)',
                            '5/6 (x0.833)',
                            '5/4 (x1.250)',
                            '3/2 (x1.500)',
                            '7/4 (x1.750)',
                            '2/1 (x2.000)',
                            '5/2 (x2.500)'
                        ]
                    }
                ]
            },
            {
                name: 'Voice Chat',
                items: [
                    {
                        name: 'Voice Chat Enabled',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: '',
                        type: 'info',
                        value: ''
                    },
                    {
                        name: 'Output Device',
                        type: 'enum',
                        options: ['Default', 'Headset', 'Speakers']
                    },
                    {
                        name: 'Voice Chat Volume',
                        type: 'slider'
                    },
                    {
                        name: 'SFX Volume during Voice Chat',
                        type: 'slider'
                    },
                    {
                        name: 'Music Volume during Voice Chat',
                        type: 'slider'
                    },
                    {
                        name: '',
                        type: 'info',
                        value: ''
                    },
                    {
                        name: 'Microphone Enabled',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Voice Volume',
                        type: 'slider'
                    },
                    {
                        name: 'Input Device',
                        type: 'enum',
                        options: ['Default', 'Headset', 'Microphone']
                    },
                    {
                        name: 'Voice Chat Mode',
                        type: 'enum',
                        options: ['Push to Talk', 'Voice Activated']
                    },
                    {
                        name: 'Microphone Volume',
                        type: 'slider'
                    },
                    {
                        name: 'Microphone Sensitivity',
                        type: 'slider'
                    }
                ]
            },
            {
                name: 'Notifications',
                items: [
                    {
                        name: 'Phone Alerts',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Stats Alerts',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Crew Updates',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Friend Updates',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Rockstar Games Online Services',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Store',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Tooltips',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Message Frequency',
                        type: 'enum',
                        options: [
                            'No Delay',
                            '1 Minute',
                            '2 Minutes',
                            '3 Minutes',
                            '4 Minutes',
                            '5 Minutes',
                            '10 Minutes',
                            '15 Minutes',
                            '30 Minutes',
                            '1 Hour'
                        ]
                    }
                ]
            },
            {
                name: 'Rockstar Editor',
                items: [
                    {
                        name: 'Allocated Storage (0.0 MB Used)',
                        type: 'enum',
                        options: [
                            '250MB of 1TB',
                            '500MB of 1TB',
                            '750MB of 1TB',
                            '1GB of 1TB',
                            '1.5GB of 1TB',
                            '2GB of 1TB',
                            '5GB of 1TB',
                            '10GB of 1TB',
                            '15GB of 1TB',
                            '25GB of 1TB',
                            '50GB of 1TB'
                        ]
                    },
                    {
                        name: 'Auto-Save Action Replay On Death',
                        type: 'enum',
                        value: 'Off',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'YouTube Upload Status',
                        type: 'enum',
                        options: ['Public', 'Unlisted', 'Private']
                    },
                    {
                        name: 'Rockstar Editor Tooltips',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Upgrade Graphics Settings For Video Export',
                        type: 'enum',
                        options: ['On', 'Off']
                    }
                ]
            },
            {
                name: 'Saving And Startup',
                items: [
                    {
                        name: 'Landing Page',
                        type: 'enum',
                        options: ['On', 'Off']
                    },
                    {
                        name: 'Startup Flow',
                        type: 'enum',
                        options: ['Load into Story Mode', 'Load into GTA Online']
                    }
                ]
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
                name: 'Crimes',
                items: [
                    {
                        name: 'Cops killed',
                        type: 'info',
                        value: '567'
                    },
                    {
                        name: 'NOOSE killed',
                        type: 'info',
                        value: '12'
                    },
                    {
                        name: 'Times Wanted',
                        type: 'info',
                        value: '456'
                    },
                    {
                        name: 'Wanted stars attained',
                        type: 'info',
                        value: '1,234'
                    },
                    {
                        name: 'Wanted stars evaded',
                        type: 'info',
                        value: '1,123'
                    },
                    {
                        name: 'Time spent with a Wanted Level',
                        type: 'info',
                        value: '12h 34m 56s'
                    },
                    {
                        name: 'Last Wanted Level duration',
                        type: 'info',
                        value: '12m 34s'
                    },
                    {
                        name: 'Longest Wanted Level duration',
                        type: 'info',
                        value: '45m 6s'
                    },
                    {
                        name: 'Time spent with a 5 star Wanted Level',
                        type: 'info',
                        value: '1h 23m 45s'
                    },
                    {
                        name: 'Drive-by kills as driver',
                        type: 'info',
                        value: '123'
                    },
                    {
                        name: 'Drive-by kills as passenger',
                        type: 'info',
                        value: '234'
                    },
                    {
                        name: 'Tires shot out',
                        type: 'info',
                        value: '2,345'
                    },
                    {
                        name: 'Vehicular kills',
                        type: 'info',
                        value: '123'
                    },
                    {
                        name: 'Cars stolen',
                        type: 'info',
                        value: '234'
                    }
                ]
            },
            {
                name: 'Vehicles',
                items: [
                    {
                        name: 'Favorite Bike',
                        type: 'info',
                        value: 'Vortex'
                    },
                    {
                        name: 'Highest Hydraulic Jump',
                        type: 'info',
                        value: '0.00 meters'
                    },
                    {
                        name: 'Time driving cars',
                        type: 'info',
                        value: '12d 3h 45m 6s'
                    },
                    {
                        name: 'Distance traveled in cars',
                        type: 'info',
                        value: '123.45 kilometers'
                    },
                    {
                        name: 'Time riding motorcycles',
                        type: 'info',
                        value: '12h 34m 56s'
                    },
                    {
                        name: 'Distance traveled on motorcycles',
                        type: 'info',
                        value: '12.34 kilometers'
                    },
                    {
                        name: 'Time flying helicopters',
                        type: 'info',
                        value: '1h 23m 45s'
                    },
                    {
                        name: 'Distance traveled in helicopters',
                        type: 'info',
                        value: '1.23 kilometers'
                    },
                    {
                        name: 'Time flying planes',
                        type: 'info',
                        value: '12m 34s'
                    },
                    {
                        name: 'Distance traveled in planes',
                        type: 'info',
                        value: '0.12 kilometers'
                    },
                    {
                        name: 'Time sailing boats',
                        type: 'info',
                        value: '12s'
                    },
                    {
                        name: 'Distance traveled in boats',
                        type: 'info',
                        value: '0.01 kilometers'
                    },
                    {
                        name: 'Time riding ATVs',
                        type: 'info',
                        value: '1m 23s'
                    },
                    {
                        name: 'Distance traveled on ATVs',
                        type: 'info',
                        value: '0.001 kilometers'
                    }
                ]
            },
            {
                name: 'Cash',
                items: [
                    {
                        name: 'Spent on weapons & armor',
                        type: 'info',
                        value: '$1,234,567'
                    },
                    {
                        name: 'Spent on vehicles & maintenance',
                        type: 'info',
                        value: '$12,345,678'
                    },
                    {
                        name: 'Spent on style & entertainment',
                        type: 'info',
                        value: '$123,456'
                    },
                    {
                        name: 'Spent on property & utilities',
                        type: 'info',
                        value: '$123,456,789'
                    },
                    {
                        name: 'Spent on Job & Activity entry fees',
                        type: 'info',
                        value: '$12,345'
                    },
                    {
                        name: 'Spent on contact services',
                        type: 'info',
                        value: '$1,234'
                    },
                    {
                        name: 'Spent on health care & bail',
                        type: 'info',
                        value: '$123'
                    },
                    {
                        name: 'Dropped or stolen',
                        type: 'info',
                        value: '$12,345'
                    },
                    {
                        name: 'Given to others',
                        type: 'info',
                        value: '$0'
                    },
                    {
                        name: 'Job cash shared with others',
                        type: 'info',
                        value: '$0'
                    },
                    {
                        name: 'Earned from Jobs',
                        type: 'info',
                        value: '$123,456,789'
                    },
                    {
                        name: 'Earned from selling vehicles',
                        type: 'info',
                        value: '$10'
                    },
                    {
                        name: 'Earned from betting',
                        type: 'info',
                        value: '$123,000'
                    },
                    {
                        name: 'Earned from Good Sport reward',
                        type: 'info',
                        value: '$90,000'
                    }
                ]
            },
            {
                name: 'Combat',
                items: [
                    {
                        name: 'Shots',
                        type: 'info',
                        value: '123,456'
                    },
                    {
                        name: 'Hits',
                        type: 'info',
                        value: '12,345'
                    },
                    {
                        name: 'Accuracy',
                        type: 'info',
                        value: '66.67%'
                    },
                    {
                        name: 'Kills',
                        type: 'info',
                        value: '12,345'
                    },
                    {
                        name: 'Headshot kills',
                        type: 'info',
                        value: '4,567'
                    },
                    {
                        name: 'Armed kills',
                        type: 'info',
                        value: '6,789'
                    },
                    {
                        name: 'Free Aim kills',
                        type: 'info',
                        value: '1,234'
                    },
                    {
                        name: 'Stealth kills',
                        type: 'info',
                        value: '123'
                    },
                    {
                        name: 'Counter attacks',
                        type: 'info',
                        value: '12'
                    },
                    {
                        name: 'Player kills',
                        type: 'info',
                        value: '1,234'
                    },
                    {
                        name: 'Player headshot kills',
                        type: 'info',
                        value: '123'
                    },
                    {
                        name: 'Survival kills',
                        type: 'info',
                        value: '12'
                    },
                    {
                        name: 'Gang Attack kills',
                        type: 'info',
                        value: '1,234'
                    },
                    {
                        name: 'Highest killstreak in Deathmatch',
                        type: 'info',
                        value: '12'
                    }
                ]
            }
        ]
    }
]

export default settings