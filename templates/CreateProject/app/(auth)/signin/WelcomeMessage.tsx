// WelcomeMessage.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import getTranslation from '@/app/_libs/getTranslation'

// WelcomeMessage
export default function WelcomeMessage({ className }: { className?: string }) {
    //

    // set base classes
    const baseClasses = 'text-900 text-3xl font-medium mb-3'

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                {/* none, custome message is here! */}
            </div>
        </>
    )

    //
}

// EOF
