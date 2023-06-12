// page.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

import getMetaTitle from '@/app/_libs/getMetaTitle'
import Content from './Content'
import isDarkMode from '@/app/_libs/server/isDarkMode'
import getLang from '@/app/_libs/server/getLang'

// MetaDeta
export const metadata = {
    title: getMetaTitle('SignIn')
}

// SignInPage
export default async function SignInPage({
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
}

// EOF
