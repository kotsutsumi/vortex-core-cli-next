// layout.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

import HtmlProvider from '@/app/_providers/HtmlProvider'

// AuthLayout
export default async function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <HtmlProvider>
            {/* Children */}
            <div className="surface-ground h-screen w-screen px-4 md:py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                {children}
            </div>
        </HtmlProvider>
    )

    //
}

// EOF
