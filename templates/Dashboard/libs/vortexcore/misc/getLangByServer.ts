// getLangByServer.ts

import 'server-only'

import nextConfig from '@/next.config'
import { cookies } from 'next/headers'

export default () => {
    // set cookies
    const cookieStore = cookies()

    // set locale state from cookie
    const cookieLocale = cookieStore.get('locale')

    // return locale
    return cookieLocale?.value
        ? cookieLocale?.value
        : nextConfig.i18n?.defaultLocale

    //
}

// EOF
