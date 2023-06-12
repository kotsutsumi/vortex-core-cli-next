// Sidebar.tsx

'use client'

import Image from 'next/image'
import Link from 'next/link'
import SideMenu from './SideMenu'
import isDarkMode from '@/libs/vortexcore/misc/isDarkMode'
import { darkModeState } from '@/libs/vortexcore/atoms/dark-mode'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function Sidebar() {
    // use darkmode recoil state
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        // set darkmode state
        setDarkMode({ enable: isDarkMode() })
        //
    }, [])

    // ------------------------------------------------------------------------

    return (
        <>
            {/* Sidebar */}
            <div
                id="sidebar"
                className="surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
                style={{ width: '280px' }}
            >
                {/* Sidebar Items */}
                <div className="flex flex-column h-full">
                    {/* Logo */}
                    <div
                        className="flex align-items-center mt-4 px-4 flex-shrink-0"
                        style={{ height: '60px' }}
                    >
                        <Link href="/">
                            {darkMode.enable && (
                                <Image
                                    src={`/images/logo-dark.svg`}
                                    alt="Logo"
                                    height={48}
                                    width={168}
                                />
                            )}
                            {!darkMode.enable && (
                                <Image
                                    src={`/images/logo-light.svg`}
                                    alt="Logo"
                                    height={48}
                                    width={168}
                                />
                            )}
                        </Link>
                    </div>

                    {/* SideMenu */}
                    <div className="overflow-y-auto">
                        <SideMenu />
                    </div>
                </div>
            </div>
        </>
    )

    //
}

// EOF
