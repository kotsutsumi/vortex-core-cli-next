// AppProvider.tsx

'use client'

import '@/libs/vortexcore/primereact/locale-ja'
import Dictionary from '@/app/_components/Dictionary'
import PrimeReact from 'primereact/api'
import { ReactNode, useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { locale } from 'primereact/api'
import isDarkMode from '@/libs/vortexcore/misc/isDarkMode'

export default function AppProvider({
    lang,
    dictionary,
    children
}: {
    lang: string | undefined
    dictionary: any
    children: ReactNode
}) {
    // set ripple effect globally
    PrimeReact.ripple = true

    // set locale for PrimeReact
    locale(lang as string)

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        //
    })

    // ------------------------------------------------------------------------

    return (
        // set RecoilRoot
        <RecoilRoot>
            {/* set dictionary to ReactRecoil */}
            <Dictionary data={dictionary} />

            {/* main */}
            <main>{children}</main>
        </RecoilRoot>
    )
}

// EOF
