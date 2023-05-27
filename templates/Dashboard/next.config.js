// const withMDX = require('@next/mdx')({
//     extension: /\.mdx$/
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en', 'ja'],

        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'ja'
    }

    //
}

// module.exports = withMDX(nextConfig)
module.exports = nextConfig

// EOF
