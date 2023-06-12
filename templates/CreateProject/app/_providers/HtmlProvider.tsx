// HtmlProvider.tsx

// ------------------------------------------------------------------------
//  Server Component
// ------------------------------------------------------------------------

import '@/app/_styles/globals.scss'
import AppProvider, { PrimeReactConfig } from '@/app/_providers/AppProvider'
import getNextConfig from '@/app/_libs/server/getNextConfig'
import getPreferredLang from '@/app/_libs/server/getPreferredLang'
import isDarkMode from '@/app/_libs/server/isDarkMode'
import { Inter } from 'next/font/google'

// MetaData
export const metadata = {
    title: process.env.NEXT_PUBLIC_APP_NAME,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION
}

// GoogleFont
const inter = Inter({ subsets: ['latin'] })

// EnvConfig
export interface EnvConfig {
    locale: string[]
    primereact: PrimeReactConfig
}

// HtmlProvider
export default async function HtmlProvider({
    children
}: {
    children: React.ReactNode
}) {
    //

    // set body tag classes
    const bodyClasses = [inter.className, isDarkMode() && 'dark-mode'].join(' ')

    // set preferred lang
    const lang = getPreferredLang()

    // load prefered lang dictionary
    const dict = await require(`@/app/_dictionaries/${lang}.json`)

    // set NextConfig
    const nextConfig = getNextConfig() as any

    // set envConfig
    const envConfig: EnvConfig = nextConfig.env || {
        locale: ['en', 'ja'],
        primereact: {
            ripple: true
        }
    }

    // set primeReact config
    const primereactConfig: PrimeReactConfig = envConfig.primereact

    // set darkMode
    const darkMode = isDarkMode()

    // ------------------------------------------------------------------------

    return (
        <>
            <html lang={lang}>
                <body className={bodyClasses}>
                    {/* AppProvider */}
                    <AppProvider
                        lang={lang}
                        darkMode={darkMode}
                        dictionary={dict}
                        primereactConfig={primereactConfig}
                    >
                        {children}
                    </AppProvider>
                </body>
            </html>
        </>
    )

    //
}

// EOF
