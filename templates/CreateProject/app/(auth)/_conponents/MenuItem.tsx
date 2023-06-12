// MenuItem.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

// MenuItem
export default function MenuItem({
    children,
    className
}: {
    children: React.ReactNode
    className: string
}) {
    //

    // set base classes
    const baseClasses = 'flex align-items-center justify-content-center mr-4'

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                {children}
            </div>
        </>
    )

    //
}

// EOF
