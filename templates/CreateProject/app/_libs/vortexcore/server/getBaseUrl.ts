// getBaseUrl.ts

import { headers } from 'next/headers'

const getBaseUrl = () => {
    //

    // ------------------------------------------------------------------------

    // read the custom x-url header
    return headers().get('x-base-url') || ''

    //
}

export default getBaseUrl

// EOF
