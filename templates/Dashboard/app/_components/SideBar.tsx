// Sidebar.tsx

'use client'

import Image from 'next/image'
import Link from 'next/link'
import SideMenu from './SideMenu'
import { useEffect, useState } from 'react'
import { isCurrentDarkMode } from '@/libs/misc/toggleDarkMode'
import { darkModeState } from '@/app/_atoms/dark-mode'
import { useRecoilValue } from 'recoil'

export default function Sidebar() {
    // use user recoil state
    const darkMode = useRecoilValue(darkModeState)

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
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
                            <Image
                                src={`/images/logo-${
                                    darkMode.enable ? 'dark' : 'light'
                                }.svg`}
                                alt="Logo"
                                height={48}
                                width={168}
                            />
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
