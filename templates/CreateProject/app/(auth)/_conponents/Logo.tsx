// Logo.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { darkModeAtom } from '@/app/_atoms/dark-mode'

// Logo
export default function Logo({
    className,
    initDarkMode
}: {
    className?: string
    initDarkMode: boolean
}) {
    //

    // use darkmode recoil state
    const darkMode = useRecoilValue(darkModeAtom)

    // set base classes
    const baseClasses = ''

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                <Image
                    priority
                    className="inline mb-3 mt-3"
                    src={`/images/logo-${
                        darkMode === null
                            ? initDarkMode
                                ? 'dark'
                                : 'light'
                            : darkMode
                            ? 'dark'
                            : 'light'
                    }.svg`}
                    alt="Logo"
                    width={224}
                    height={64}
                />
            </div>
        </>
    )

    //
}

// EOF
