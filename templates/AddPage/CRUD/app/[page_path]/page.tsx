// page.tsx

import AppProvider from '@/app/_providers/AppProvider'
import Content from './content'
import ServerAuthContent from '@/app/_components/next-auth/ServerAuthContent'
import styles from './page.module.css'

export default function Page() {
    // ------------------------------------------------------------------------
    return (
        <>
            {/* @ts-expect-error Server Component */}
            <ServerAuthContent>
                {/* AppProvider */}
                <AppProvider>
                    <h1>CRUD Sample</h1>
                    <div className="mt-5">
                        {/* <Content loadingType="overlay" /> */}
                        <Content />
                    </div>
                </AppProvider>
            </ServerAuthContent>
        </>
    )

    //
}

// EOF