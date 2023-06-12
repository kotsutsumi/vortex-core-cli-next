// getLang.ts

import nextConfig from '@/next.config'
import { parseCookies } from 'nookies'

export default () => {
    // set cookies
    const cookies = parseCookies()

    // return locale
    return cookies['locale']
        ? cookies['locale']
        : nextConfig.i18n?.defaultLocale

    //
}

// EOF
