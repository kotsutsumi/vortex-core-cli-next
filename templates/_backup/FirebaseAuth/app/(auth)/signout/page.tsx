// page.tsx

'use client'

// [@-- section="Import"]
import { signOut } from 'next-auth/react'
import { useEffect } from 'react'
// [/@--]

// [@-- section="Code"]
export default function SignOutPage() {
    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        // redirect to `signin`
        signOut({ callbackUrl: `/signin` })
    })

    // ------------------------------------------------------------------------
    return (
        // [@-- section="TSX" type="default"]

        <></>

        // [/@--]
    )

    //
}
// [/@--]

// EOF
