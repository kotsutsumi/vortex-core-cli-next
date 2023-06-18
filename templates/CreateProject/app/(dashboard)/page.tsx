// page.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

import DashboardProvider from '@/app/_providers/DashboardProvider'
import ServerAuthProvider from '@/app/_providers/ServerAuthProvider'
import isDarkMode from '@/app/_libs/vortexcore/server/isDarkMode'

// IndexPage
export default async function IndexPage({
    params,
    searchParams
}: {
    params: { slug: string }
    searchParams?: { [key: string]: string | string[] | undefined }
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <h1>Index Page</h1>
        </>
    )

    //
}

// EOF
