// page.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

/**
 * @description ServerComponent でのセッションは読み取り専用です。
 */
import Content from './Content'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

// NextAuthSamplePage
export default async function NextAuthSamplePage() {
    //

    // get session
    const session = await getServerSession(authOptions)
    console.log('ServerComponent Session: ', session)

    // ------------------------------------------------------------------------

    return (
        <>
            Page [SSR]
            <br />
            <Content />
        </>
    )

    //
}

// EOF
