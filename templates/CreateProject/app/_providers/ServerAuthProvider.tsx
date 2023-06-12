// ServerAuthProvider.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

import { ReactNode } from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

// ServerAuthProvider
export default async function ServerAuthProvider({
    children
}: {
    children: ReactNode
}) {
    //

    // get server session
    const session = await getServerSession(authOptions)

    // redirect to signin page
    if (!session) {
        redirect('/signin')
    }

    // ------------------------------------------------------------------------

    return <>{children}</>

    //
}

// EOF
