// Content.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { signOut } from 'next-auth/react'
import { useEffect } from 'react'

// Content
export default function Content() {
    //

    // useEffect is a React hook that runs a function when the component is
    useEffect(() => {
        //

        // redirect to `signin`
        signOut({ callbackUrl: `/signin` })

        //
    })

    // ------------------------------------------------------------------------

    return <></>

    //
}

// EOF
