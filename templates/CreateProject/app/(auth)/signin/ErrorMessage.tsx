// ErrorMessage.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import getTranslation from '@/app/_libs/getTranslation'
import { Message } from 'primereact/message'

// ErrorMessage
export default function ErrorMessage({ className }: { className?: string }) {
    //

    // set translation
    const t = getTranslation()

    // set base classes
    const baseClasses = 'flex align-items-center justify-content-between mb-4'

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                <Message
                    className="w-full"
                    severity="error"
                    text={t('signin-error')}
                />
            </div>
        </>
    )

    //
}

// EOF
