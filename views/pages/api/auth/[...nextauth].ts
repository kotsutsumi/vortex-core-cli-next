// [...nextauth].ts

import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import { auth } from '@/libs/firebase/admin'

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
        async jwt({ token, user }) {
            return { ...token, ...user } as any
        },
        // sessionにJWTトークンからのユーザ情報を格納
        async session({ session, token }) {
            // @ts-ignore
            session.user.emailVerified = token.emailVerified
            // @ts-ignore
            session.user.uid = token.uid

            return session
        }
    }
}

export default NextAuth(authOptions)

// EOF
