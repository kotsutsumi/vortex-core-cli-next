// page.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

import Content from './Content'
import isDarkMode from '@/app/_libs/vortexcore/server/isDarkMode'

// ForgotPasswordPage
export default function ForgotPasswordPage({
    params,
    searchParams
}: {
    params: { slug: string }
    searchParams?: { [key: string]: string | string[] | undefined }
}) {
    //

    // set initDarkMode
    const initDarkMode = isDarkMode()

    // ------------------------------------------------------------------------

    return (
        <>
            <Content initDarkMode={initDarkMode} />
        </>
    )

    //

    //
}

// EOF
