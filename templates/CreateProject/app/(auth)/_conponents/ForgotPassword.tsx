// ForgotPassword.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import Link from 'next/link'
import getTranslation from '@/app/_libs/vortexcore/getTranslation'

// ForgotPassword
export default function ForgotPassword({ className }: { className?: string }) {
    //

    // set translation
    const t = getTranslation()

    // set base classes
    const baseClasses = 'flex align-items-center justify-content-between mb-4'

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                <Link
                    href="/forgot-password"
                    className="font-medium no-underline text-blue-500 cursor-pointer"
                >
                    {t('forgot-password')}
                </Link>
            </div>
        </>
    )

    //
}

// EOF
