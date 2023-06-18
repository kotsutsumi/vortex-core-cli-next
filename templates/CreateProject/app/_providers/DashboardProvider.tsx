// DashboardProvider.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import Header from '@/app/_components/Header'
import Sidebar from '@/app/_components/SideBar'
import { ReactNode, useEffect, useState } from 'react'
import { darkModeAtom } from '../_atoms/dark-mode'
import { useRecoilValue } from 'recoil'

// DashboardProvider
export default function DashboardProvider({
    children,
    initDarkMode
}: {
    children: ReactNode
    initDarkMode: boolean
}) {
    //

    // use darkmode recoil state
    const darkMode = useRecoilValue(darkModeAtom)

    // set base classes
    const [textColor, setTextColor] = useState(
        initDarkMode ? 'text-white' : 'text'
    )

    // useEffect is a React hook that runs a function when the component is
    useEffect(() => {
        //

        // set text color
        setTextColor(
            darkMode === null
                ? initDarkMode
                    ? 'text-white'
                    : 'text'
                : darkMode
                ? 'text-white'
                : 'text'
        )

        //
    }, [initDarkMode, darkMode])

    // ------------------------------------------------------------------------

    return (
        <div className="min-h-screen flex relative lg:static surface-ground">
            {/* Sidebar */}
            <Sidebar initDarkMode={initDarkMode} />

            <div
                className={`min-h-screen flex flex-column relative flex-auto ${textColor}`}
            >
                {/* Header */}
                <Header initDarkMode={initDarkMode} />

                {/* @ts-ignore */}
                <div className="px-5">{children}</div>
            </div>
        </div>
    )

    //
}

// EOF
