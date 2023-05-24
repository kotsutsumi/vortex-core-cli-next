// AppProvider.tsx

'use client'

import '@/libs/primereact/locale-ja'
import Header from '@/app/_components/Header'
import Sidebar from '@/app/_components/SideBar'
import { ReactNode, useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { locale } from 'primereact/api'

export default function AppProvider({ children }: { children: ReactNode }) {
    // set locale to Japanese for PrimeReact
    locale('ja')

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        //
    })

    // ------------------------------------------------------------------------

    return (
        <RecoilRoot>
            <div className="min-h-screen flex relative lg:static surface-ground">
                {/* Sidebar */}
                <Sidebar />

                <div className="min-h-screen flex flex-column relative flex-auto">
                    {/* Header */}
                    <Header />
                    <main className="p-5">{children}</main>
                </div>
            </div>
        </RecoilRoot>
    )
}

// EOF
