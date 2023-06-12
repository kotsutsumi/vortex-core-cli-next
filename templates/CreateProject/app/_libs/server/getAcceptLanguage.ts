// getAcceptLanguage.ts

import { headers } from 'next/headers'

type AcceptLanguage = {
    locale: string
    q: number
}

const getAcceptLanguage = (): AcceptLanguage[] => {
    //

    // read the custom 'Accept-Language' header
    const langs = headers().get('Accept-Language') || ''

    // ------------------------------------------------------------------------

    return langs.split(',').map((lang) => {
        const [locale, q = '1'] = lang.trim().split(';')

        return {
            locale,
            q: Number(q.split('=')[1]) || 1
        }
    })

    //
}

export default getAcceptLanguage

// EOF
