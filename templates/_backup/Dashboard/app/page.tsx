// page.tsx

import ServerAuthContent from '@/app/_components/next-auth/ServerAuthContent'
import DashboardProvider from '@/app/_providers/DashboardProvider'

export default async function IndexPage() {
    // ------------------------------------------------------------------------

    return (
        <>
            {/* @ts-ignore */}
            <ServerAuthContent>
                {/* Dashboard Provider */}
                <DashboardProvider>
                    <h1>Index Page</h1>
                </DashboardProvider>
            </ServerAuthContent>
        </>
    )

    //
}

// EOF
