// page.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

import Content from './Content'
import getMetaTitle from '@/app/_libs/vortexcore/getMetaTitle'

// MetaDeta
export const metadata = {
    title: getMetaTitle('SignOut')
}

// SignOutPage
export default function SignOutPage({
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
            <div className="text-gray-500 flex w-full h-full align-items-center justify-content-center">
                Signouting now...
            </div>

            {/* Content */}
            <Content />
        </>
    )

    //
}

// EOF
