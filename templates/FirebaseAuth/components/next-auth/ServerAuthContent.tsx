// ServerAuthContent.tsx

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

const ServerAuthComponent = async ({
    children
}: {
    children: React.ReactNode
}) => {
    // set session
    const session = await getServerSession(authOptions)

    // set user
    const user = session?.user

    // redirect if not signed in
    if (!user) {
        redirect('/signin')
    }

    // ------------------------------------------------------------------------

    return (
        <>
            {children}
            {/* <p>{JSON.stringify(user)}</p> */}
        </>
    )
}

export default ServerAuthComponent

// EOF
