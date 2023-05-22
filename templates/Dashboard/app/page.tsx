// page.tsx

import styles from './page.module.css'
import ServerAuthContent from '@/app/_components/next-auth/ServerAuthContent'
import AppProvider from '@/app/_providers/AppProvider'

export default function IndexPage() {
    // ------------------------------------------------------------------------
    return (
        <>
            {/* @ts-expect-error Server Component */}
            <ServerAuthContent>
                {/* AppProvider */}
                <AppProvider>
                    <h1>Index Page</h1>
                </AppProvider>
            </ServerAuthContent>
        </>
    )

    //
}

// EOF
