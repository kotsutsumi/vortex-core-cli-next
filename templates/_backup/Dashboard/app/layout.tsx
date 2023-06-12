// layout.tsx

// [@-- section="ResetCss" type="import" comment="A modern CSS reset"]
import 'modern-css-reset/dist/reset.min.css'
// [/@--]

// [@-- section="PrimeFlex" type="import"]
import 'primeflex/primeflex.css'
// [/@--]

// [@-- section="PrimeIcons" type="import"]
import 'primeicons/primeicons.css'
// [/@--]

// [@-- section="PrimeReact" type="import"]
import 'primereact/resources/primereact.min.css'
import '@/libs/vortexcore/primereact/locale-ja'

// lara-blue
import '@/libs/vortexcore/primereact/themes/lara-blue/light-theme.css'
import '@/libs/vortexcore/primereact/themes/lara-blue/dark-theme.css'

// lara-indigo
// import '@/libs/vortexcore/primereact/themes/lara-indigo/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/lara-indigo/dark-theme.css'

// lara-purple
// import '@/libs/vortexcore/primereact/themes/lara-purple/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/lara-purple/dark-theme.css'

// lara-teal
// import '@/libs/vortexcore/primereact/themes/lara-teal/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/lara-teal/dark-theme.css'

// md-deeppurple
// import '@/libs/vortexcore/primereact/themes/md-deeppurple/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/md-deeppurple/dark-theme.css'

// md-indigo
// import '@/libs/vortexcore/primereact/themes/md-indigo/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/md-indigo/dark-theme.css'

// mdc-deeppurple
// import '@/libs/vortexcore/primereact/themes/mdc-deeppurple/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/mdc-deeppurple/dark-theme.css'

// mdc-indigo
// import '@/libs/vortexcore/primereact/themes/mdc-indigo/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/mdc-indigo/dark-theme.css'

// soho
// import '@/libs/vortexcore/primereact/themes/soho/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/soho/dark-theme.css'

// bootstrap4-blue
// import '@/libs/vortexcore/primereact/themes/bootstrap4-blue/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/bootstrap4-blue/dark-theme.css'

// bootstrap4-purple
// import '@/libs/vortexcore/primereact/themes/bootstrap4-purple/light-theme.css'
// import '@/libs/vortexcore/primereact/themes/bootstrap4-purple/dark-theme.css'
// [/@--]

// [@-- section="CustomCSS" type="import"]
import '@/app/globals.css'
// [/@--]

// [@-- section="MiscFunctions" type="import"]
import getDarkModeClass from '@/libs/vortexcore/misc/getDarkModeClass'
import getDict from '@/libs/vortexcore/misc/getDictionary'
import getLang from '@/libs/vortexcore/misc/getLangByServer'
// [/@--]

// [@-- section="AppProvider" type="import"]
import AppProvider from '@/app/_providers/AppProvider'
// [/@--]

// [@-- section="GoogleFont" type="import"]
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// [/@--]

// [@-- section="MetaDeta"]
export const metadata = {
    title: 'Vortex Core App',
    description: 'Generated by vortex core cli'
}
// [/@--]

// [@-- section="Code"]
export default async function AppLayout({
    children
}: {
    children: React.ReactNode
}) {
    // [@-- section="BodyTagClasses"]

    // set body tag classes
    const bodyClasses = [inter.className, getDarkModeClass()].join(' ')

    // [/@--]

    // [@-- section="Dictionary"]

    const dictionary = await getDict()

    // [/@--]

    // ------------------------------------------------------------------------

    return (
        // [@-- section="TSX" type="default"]

        // set lang attribute by @/libs/vortexcore/misc/getLang
        <html lang={getLang()}>
            {/* Body */}
            <body className={bodyClasses}>
                <AppProvider
                    // specify lang attribute by @/libs/vortexcore/misc/getLang
                    lang={getLang()}
                    //
                    // specify dictionary by @/libs/vortexcore/misc/getDictionary
                    dictionary={dictionary}
                    //
                >
                    {/* Children */}
                    {children}
                </AppProvider>
            </body>
        </html>

        // [/@--]
    )

    //
}
// [/@--]

// EOF