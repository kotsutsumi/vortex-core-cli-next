// SessionProvider.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'

// SessionProviderProps
export interface SessionProviderProps {
    children: React.ReactNode
}

// SessionProvider
const SessionProvider = ({ children }: SessionProviderProps) => {
    //

    // ------------------------------------------------------------------------

    return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>

    //
}

export default SessionProvider

// EOF
