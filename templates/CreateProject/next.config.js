const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.snapshot.managedPaths = [
            path.resolve(__dirname, './node_modules')
        ]

        return config
    },
    experimental: {
        // optimizeCss: true,
        // serverActions: true
    },
    env: {
        locales: ['ja', 'en'],
        primereact: {
            ripple: true
        }
    }
    // i18n: {
    //     // These are all the locales you want to support in
    //     // your application
    //     locales: ['en', 'ja'],

    //     // This is the default locale you want to be used when visiting
    //     // a non-locale prefixed path e.g. `/hello`
    //     defaultLocale: 'ja'
    // }

    //
}

// module.exports = withMDX(nextConfig)
module.exports = nextConfig

// EOF
