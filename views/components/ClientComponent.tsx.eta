// ClientComponent.tsx

import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ClientComponent = ({ children }: { children: React.ReactNode }) => {
    const { data: session } = useSession()
    const user = session?.user
    const router = useRouter()

    useEffect(() => {
        if (session === undefined) {
            return
        }

        if (!user) {
            // サインインページへリダイレクト
            router.push('/signin')
        }
    })

    if (user) {
        return <>{children}</>
    }

    return <></>
}

export default ClientComponent

// EOF
