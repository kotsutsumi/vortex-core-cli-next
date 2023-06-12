// Rows.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { ReactNode } from 'react'

// BoxAlign
export const BoxAlign = {
    left: 0,
    center: 1,
    right: 2
} as const

// BoxAlignTypes
export type BoxAlignTypes = (typeof BoxAlign)[keyof typeof BoxAlign]

export default function Rows({
    children,
    className,
    align = BoxAlign.left
}: {
    children: ReactNode
    className?: string
    align?: BoxAlignTypes
}) {
    //

    // set class name
    const baseClassName = [
        'flex',
        'flex-wrap',
        // 'flex-column',
        // 'md:flex-row',
        (() => {
            if (align === BoxAlign.left) {
                return 'justify-content-start'
            } else if (align === BoxAlign.center) {
                return 'justify-content-center'
            } else if (align === BoxAlign.right) {
                return 'justify-content-end'
            }
        })()
    ].join(' ')

    // ------------------------------------------------------------------------

    return (
        <>
            <div className="flex-none">
                <div className={baseClassName}>{children}</div>
            </div>
        </>
    )

    //
}

// Row
export function Row({
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
            <div
                className={baseClassName}
                style={{
                    minHeight: '4em',
                    minWidth: '4em'
                }}
            >
                {children}
            </div>
        </>
    )

    //
}

// EOF
