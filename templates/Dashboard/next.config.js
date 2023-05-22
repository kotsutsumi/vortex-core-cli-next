const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withMDX(nextConfig)

/*
// NextTranslate
const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
    experimental: { appDir: true }
})
*/

// EOF
