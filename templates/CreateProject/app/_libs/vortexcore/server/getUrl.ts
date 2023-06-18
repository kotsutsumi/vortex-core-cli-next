// getUrl.ts

import { headers } from 'next/headers'

const getUrl = () => {
    //

    // ------------------------------------------------------------------------

    // read the custom x-url header
    return headers().get('x-url') || ''

    //
}

export default getUrl

// EOF
