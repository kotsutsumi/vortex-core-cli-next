// Breakpont.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import React from 'react'
import { ReactNode } from 'react'

// Responsive
export const Responsive = {
    sm: 0,
    md: 1,
    lg: 2,
    xl: 3
} as const

// ResponsiveTypes
export type ResponsiveTypes = (typeof Responsive)[keyof typeof Responsive]

// Breakpoint
export default function Breakpoint({
    children,
    type
}: {
    children: ReactNode
    type: ResponsiveTypes
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            {type === Responsive.sm && (
                <div className="block md:hidden lg:hidden xl:hidden">
                    {children}
                </div>
            )}

            {type === Responsive.md && (
                <div className="hidden md:block lg:hidden xl:hidden">
                    {children}
                </div>
            )}

            {type === Responsive.lg && (
                <div className="hidden md:hidden lg:block xl:hidden">
                    {children}
                </div>
            )}

            {type === Responsive.xl && (
                <div className="hidden md:hidden lg:hidden xl:block">
                    {children}
                </div>
            )}
        </>
    )

    //
}

// EOF
