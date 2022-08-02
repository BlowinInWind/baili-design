module.exports = {
    // presets: [
    //     [
    //         '@babel/env',
    //         {
    //             modules: false,
    // useBuiltIns: 'usage',
    // corejs: '3',
    //             targets: { chrome: '58', ie: '11' }
    //         }
    //     ],
    //     '@babel/preset-react',
    //     '@babel/preset-typescript'
    // ],
    // plugins: [
    //     [
    //         '@babel/plugin-transform-runtime',
    // {
    //     corejs: 3
    // }
    //     ]
    // ]

    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                useBuiltIns: 'usage',
                corejs: '3',
                // rollup have to use EsModules to import
                modules: false
            }
        ],
        '@babel/preset-typescript',
        '@babel/preset-react'
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3
            }
        ]
    ]
};
