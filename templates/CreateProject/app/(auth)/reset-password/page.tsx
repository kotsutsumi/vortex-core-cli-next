// page.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

import { redirect } from 'next/navigation'
import Content from './Content'
import isDarkMode from '@/app/_libs/server/isDarkMode'

// ForgotPasswordPage
export default function ResetPasswordPage({
    params,
    searchParams
}: {
    params: { slug: string }
    searchParams?: { [key: string]: string | string[] | undefined }
}) {
    //

    // check if oobCode is undefined
    if (searchParams?.oobCode === undefined) {
        redirect('/signin')
    }

    // set initDarkMode
    const initDarkMode = isDarkMode()

    // ------------------------------------------------------------------------

    return (
        <>
            <Content
                initDarkMode={initDarkMode}
                actionCode={searchParams?.oobCode as string}
            />
        </>
    )

    //

    //
}

// EOF
