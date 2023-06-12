// layout.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

import DashboardProvider from '@/app/_providers/DashboardProvider'
import HtmlProvider from '@/app/_providers/HtmlProvider'
import ServerAuthProvider from '@/app/_providers/ServerAuthProvider'
import isDarkMode from '@/app/_libs/isDarkMode'

// DashboardLayout
export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    //

    // set initDarkMode
    const initDarkMode = isDarkMode()

    // ------------------------------------------------------------------------

    return (
        <>
            {/* HtmlProvider */}
            <HtmlProvider>
                {/* ServerAuthProvider */}
                <ServerAuthProvider>
                    {/* Dashboard Provider */}
                    <DashboardProvider initDarkMode={initDarkMode}>
                        {/* Children */}
                        {children}
                    </DashboardProvider>
                </ServerAuthProvider>
            </HtmlProvider>
        </>
    )

    //
}

// EOF
