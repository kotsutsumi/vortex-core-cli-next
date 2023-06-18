// getPreferredLang.ts

import getAcceptLanguage from './getAcceptLanguage'
import getNextConfig from './getNextConfig'
import { cookies } from 'next/headers'

const getPreferredLang = () => {
    //

    // set cookies
    const cookieStore = cookies()

    // get env config
    const env = getNextConfig().env || {}

    // set available locales
    const locales = env.locales || []

    // when cookie is set, always use it
    if (cookieStore.get('locale') !== undefined) {
        return cookieStore.get('locale')?.value || locales[0] || 'en'
    }

    // set default localeenv
    let result = locales[0] || 'en'

    // extract the preferred language
    getAcceptLanguage()
        .reverse()
        .map((lang) => {
            if (locales.indexOf(lang.locale as never) >= 0) {
                result = lang.locale
            }
        })

    // ------------------------------------------------------------------------

    return result

    //
}

export default getPreferredLang

// EOF
