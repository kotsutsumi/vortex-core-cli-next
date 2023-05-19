// page.tsx

import Image from 'next/image'
import styles from './page.module.css'
import ServerAuthContent from '@/components/next-auth/ServerAuthContent'
import AppProvider from '@/components/providers/AppProvider'

export default function IndexPage() {
    // ------------------------------------------------------------------------
    return (
        <>
            {/* @ts-expect-error Server Component */}
            <ServerAuthContent>
                {/* AppProvider */}
                <AppProvider>
                    {/* TODO: DASHBOARD PROVIDER */}
                    {/* TODO: HEADER */}
                    {/* TODO: SIDEMENU */}
                    <main>Vortex Core Base</main>
                    {/* TODO: FOOTER */}
                </AppProvider>
            </ServerAuthContent>
        </>
    )

    //
}

// EOF
