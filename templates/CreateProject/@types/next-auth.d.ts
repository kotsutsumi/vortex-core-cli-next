// next-auth.d.ts

import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
    interface Session {
        user: {
            uid: string
            emailVerified?: boolean
            data?: any
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        uid: string
        emailVerified: boolean
    }
}

// EOF
