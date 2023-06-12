// DashboardProvider.tsx

'use client'

import Header from '@/app/_components/Header'
import Sidebar from '@/app/_components/SideBar'
import { ReactNode, useEffect } from 'react'

export default function DashboardProvider({
    children
}: {
    children: ReactNode
}) {
    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        //
    })

    // ------------------------------------------------------------------------

    return (
        <div className="min-h-screen flex relative lg:static surface-ground">
            {/* Sidebar */}
            <Sidebar />

            <div className="min-h-screen flex flex-column relative flex-auto">
                {/* Header */}
                <Header />

                {/* @ts-ignore */}
                <main className="p-5">{children}</main>
            </div>
        </div>
    )
}

// EOF
