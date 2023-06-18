// AppProvider.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import '@/app/_libs/primereact/import-theme'
import '@/app/_libs/primereact/locale-ja'
import DictionaryProvider from '@/app/_providers/DictionaryProvider'
import LangProvider from './LangProvider'
import PrimeReact from 'primereact/api'
import SessionProvider from '@/app/_providers/SessionProvider'
import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import { locale as setPrimeReactLocale } from 'primereact/api'
import { parseCookies } from 'nookies'
import DarkModeProvider from './DarkModeProvider'

// Directory
export interface Directory {
    [key: string]: string
}

// PrimeReactConfig
export interface PrimeReactConfig {
    ripple: boolean
}

// AppProvider
export default function AppProvider({
    lang,
    darkMode,
    children,
    dictionary,
    primereactConfig
}: {
    lang: string
    darkMode: boolean
    children: ReactNode
    dictionary: Directory
    primereactConfig: PrimeReactConfig
}) {
    //

    // get cookies
    const cookie = parseCookies()

    // set active lang
    const activeLang = cookie.locale || lang

    // set ripple effect globally
    PrimeReact.ripple = primereactConfig.ripple

    // set locale for PrimeReact
    setPrimeReactLocale(activeLang)

    // ------------------------------------------------------------------------

    return (
        // session provider
        <SessionProvider>
            {/* RecoilRoot */}
            <RecoilRoot>
                {/* LangProvider */}
                <LangProvider preferredLang={activeLang} />

                {/* DictionaryProvider */}
                <DictionaryProvider initialData={dictionary} />

                {/* DarkModeProvider */}
                <DarkModeProvider darkMode={darkMode} />

                {/* main */}
                <main className="h-full">{children}</main>
            </RecoilRoot>
        </SessionProvider>
    )

    //
}

// EOF
