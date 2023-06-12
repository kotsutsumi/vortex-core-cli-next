// route.ts

import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import { auth } from '@/app/_libs/firebase/admin'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {},
            authorize: async ({ idToken }: any, _req) => {
                if (idToken) {
                    try {
                        const decoded = await auth.verifyIdToken(idToken)

                        return { ...decoded }
                    } catch (err) {
                        console.error(err)
                    }
                }
                return null as any
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, trigger, session }) {
            if (trigger === 'update' && session) {
                token.name = session
            }

            return token
        },
        async session({ session, token }: { session: any; token: any }) {
            session.user.emailVerified = token.emailVerified
            session.user.uid = token.uid
            session.data = token.name

            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// EOF
