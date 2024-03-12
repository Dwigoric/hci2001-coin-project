const settings = [
    {
        name: 'MAP',
        submenu: [],
    },
    {
        name: 'BRIEF',
        submenu: [],
    },
    {
        name: 'STATS',
        submenu: [],
    },
    {
        name: 'SETTINGS',
        submenu: [
            {
                name: 'Gamepad',
            },
            {
                name: 'Keyboard / Mouse',
                options: [
                    {
                        name: 'Mouse Input Method',
                        type: 'enum',
                    },
                    {
                        name: 'Mouse Look Sensitivity',
                        type: 'slider',
                    },
                ],
            },
            {
                name: 'Key Bindings',
            },
            {
                name: 'Audio',
            },
            {
                name: 'Camera',
            },
            {
                name: 'Display',
            },
            {
                name: 'Graphics',
            },
            {
                name: 'Advanced Graphics',
            },
            {
                name: 'Voice Chat',
            },
            {
                name: 'Notifications',
            },
            {
                name: 'Rockstar Editor',
            },
            {
                name: 'Saving And Startup',
            },
        ],
    },
    {
        name: 'GAME',
        submenu: [],
    },
    {
        name: 'ONLINE',
        submenu: [],
    },
];

export default settings;