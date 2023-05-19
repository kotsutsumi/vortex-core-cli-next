// page.tsx

'use client'

import { signOut } from 'next-auth/react'
import { useEffect } from 'react'

export default function SignOutPage() {
    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        // redirect to `signin`
        signOut({ callbackUrl: `/signin` })
    })

    // ------------------------------------------------------------------------
    return <></>

    //
}

// EOF
