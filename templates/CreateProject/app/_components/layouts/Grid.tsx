// Grid.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { ReactNode } from 'react'

// Grid
export default function Grid({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // set class name
    const baseClassName = [].join(' ') + ' ' + className

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClassName}>{children}</div>
        </>
    )

    //
}

// EOF
