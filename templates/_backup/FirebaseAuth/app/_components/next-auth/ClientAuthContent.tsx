// ClientAuthContent.tsx

'use client'

import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export interface AuthContextProps {
    children: React.ReactNode
}

const ClientAuthContent = ({ children }: AuthContextProps) => {
    // ready state
    const [ready, setReady] = useState(false)

    // session
    const { data: session } = useSession({
        required: true,
        onUnauthenticated: () => {
            redirect('/signin')
        }
    })

    // user data
    const user = session?.user

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        // if session is not ready, return
        if (!session) {
            return
        }

        // set ready state
        setReady(true)

        //
    }, [ready])

    // ------------------------------------------------------------------------

    return (
        <>
            {ready && children}

            <p>{JSON.stringify(user)}</p>
        </>
    )

    //
}

export default ClientAuthContent

// EOF
