// Caption.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { ReactNode } from 'react'
import Breakpoint, { Responsive } from './layouts/Breakpoint'

// Captino
export default function Caption({
    children,
    level,
    className
}: {
    children: ReactNode
    level?: number
    className?: string
}) {
    //

    // define style sets
    const styleSets = {
        sm: [
            'text-lg' + (className ? ' ' + className : ''),
            'text-base' + (className ? ' ' + className : ''),
            'text-sm' + (className ? ' ' + className : ''),
            'text-xs' + (className ? ' ' + className : ''),
            'text-xs' + (className ? ' ' + className : ''),
            'text-xs' + (className ? ' ' + className : '')
        ],
        md: [
            'text-xl' + (className ? ' ' + className : ''),
            'text-lg' + (className ? ' ' + className : ''),
            'text-base' + (className ? ' ' + className : ''),
            'text-sm' + (className ? ' ' + className : ''),
            'text-xs' + (className ? ' ' + className : ''),
            'text-xs' + (className ? ' ' + className : '')
        ],
        lg: [
            'text-3xl' + (className ? ' ' + className : ''),
            'text-2xl' + (className ? ' ' + className : ''),
            'text-xl' + (className ? ' ' + className : ''),
            'text-lg' + (className ? ' ' + className : ''),
            'text-base' + (className ? ' ' + className : ''),
            'text-sm' + (className ? ' ' + className : '')
        ],
        xl: [
            'text-5xl' + (className ? ' ' + className : ''),
            'text-4xl' + (className ? ' ' + className : ''),
            'text-3xl' + (className ? ' ' + className : ''),
            'text-2xl' + (className ? ' ' + className : ''),
            'text-xl' + (className ? ' ' + className : ''),
            'text-lg' + (className ? ' ' + className : '')
        ]
    }

    // ------------------------------------------------------------------------

    return (
        <>
            <Breakpoint type={Responsive.sm}>
                {level === undefined && (
                    <h1 className={styleSets.sm[0]}>{children}</h1>
                )}
                {level === 1 && <h1 className={styleSets.sm[0]}>{children}</h1>}
                {level === 2 && <h2 className={styleSets.sm[1]}>{children}</h2>}
                {level === 3 && <h3 className={styleSets.sm[2]}>{children}</h3>}
                {level === 4 && <h4 className={styleSets.sm[3]}>{children}</h4>}
                {level === 5 && <h5 className={styleSets.sm[4]}>{children}</h5>}
                {level === 6 && <h6 className={styleSets.sm[5]}>{children}</h6>}
            </Breakpoint>

            <Breakpoint type={Responsive.md}>
                {level === undefined && (
                    <h1 className={styleSets.md[0]}>{children}</h1>
                )}
                {level === 1 && <h1 className={styleSets.md[0]}>{children}</h1>}
                {level === 2 && <h2 className={styleSets.md[1]}>{children}</h2>}
                {level === 3 && <h3 className={styleSets.md[2]}>{children}</h3>}
                {level === 4 && <h4 className={styleSets.md[3]}>{children}</h4>}
                {level === 5 && <h5 className={styleSets.md[4]}>{children}</h5>}
                {level === 6 && <h6 className={styleSets.md[5]}>{children}</h6>}
            </Breakpoint>

            <Breakpoint type={Responsive.lg}>
                {level === undefined && (
                    <h1 className={styleSets.lg[0]}>{children}</h1>
                )}
                {level === 1 && <h1 className={styleSets.lg[0]}>{children}</h1>}
                {level === 2 && <h2 className={styleSets.lg[1]}>{children}</h2>}
                {level === 3 && <h3 className={styleSets.lg[2]}>{children}</h3>}
                {level === 4 && <h4 className={styleSets.lg[3]}>{children}</h4>}
                {level === 5 && <h5 className={styleSets.lg[4]}>{children}</h5>}
                {level === 6 && <h6 className={styleSets.lg[5]}>{children}</h6>}
            </Breakpoint>

            <Breakpoint type={Responsive.xl}>
                {level === undefined && (
                    <h1 className={styleSets.xl[0]}>{children}</h1>
                )}
                {level === 1 && <h1 className={styleSets.xl[0]}>{children}</h1>}
                {level === 2 && <h2 className={styleSets.xl[1]}>{children}</h2>}
                {level === 3 && <h3 className={styleSets.xl[2]}>{children}</h3>}
                {level === 4 && <h4 className={styleSets.xl[3]}>{children}</h4>}
                {level === 5 && <h5 className={styleSets.xl[4]}>{children}</h5>}
                {level === 6 && <h6 className={styleSets.xl[5]}>{children}</h6>}
            </Breakpoint>
        </>
    )

    //
}

// c1
export function c1({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <Caption className={className}>{children}</Caption>
        </>
    )

    //
}

// c2
export function c2({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <Caption level={2} className={className}>
                {children}
            </Caption>
        </>
    )

    //
}

// c3
export function c3({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <Caption level={3} className={className}>
                {children}
            </Caption>
        </>
    )

    //
}

// c4
export function c4({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <Caption level={4} className={className}>
                {children}
            </Caption>
        </>
    )

    //
}

// c5
export function c5({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <Caption level={5} className={className}>
                {children}
            </Caption>
        </>
    )

    //
}

// c6
export function c6({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <Caption level={6} className={className}>
                {children}
            </Caption>
        </>
    )

    //
}

// EOF
