// Vanilla Extract
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withVanillaExtract(withMDX(nextConfig))

/*
// NextTranslate
const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
    experimental: { appDir: true }
})
*/

// EOF
