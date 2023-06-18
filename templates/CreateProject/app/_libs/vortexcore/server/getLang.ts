// getLang.ts

import getPreferredLang from './getPreferredLang'
import { parseCookies } from 'nookies'

export default function getLang() {
    //

    // set cookies
    const cookies = parseCookies()

    // return locale
    return cookies['locale'] ? cookies['locale'] : getPreferredLang()

    //
}

// EOF
