// AppProvider.tsx

'use client'

import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import Header from '@/app/_components/Header'
import Sidebar from '@/app/_components/SideBar'

export default function AppProvider({ children }: { children: ReactNode }) {
    return (
        <RecoilRoot>
            <div className="min-h-screen flex relative lg:static surface-ground">
                {/* Sidebar */}
                <Sidebar />

                <div className="min-h-screen flex flex-column relative flex-auto">
                    <div className="flex flex-column flex-auto">
                        {/* Header */}
                        <Header />
                        <main className="px-5">{children}</main>
                    </div>
                </div>
            </div>
        </RecoilRoot>
    )
}

// EOF
