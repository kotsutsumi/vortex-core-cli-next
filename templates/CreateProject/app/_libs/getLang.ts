// getLang.ts

import { parseCookies } from 'nookies'

export default function getLang(): string {
    //

    // set cookies
    const cookies = parseCookies()

    // ------------------------------------------------------------------------

    // return locale
    return cookies['locale'] ? cookies['locale'] : ''

    //
}

// EOF
