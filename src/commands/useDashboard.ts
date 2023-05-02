// useDashboard.ts

import * as Eta from 'eta'
import childProcess from 'child_process'
import fs from 'fs'
import ora from 'ora'
import path from 'path'
import util from 'util'
import { TUseDashboardCommandArg } from '../index.d'

const exec = util.promisify(childProcess.exec)

export async function useDashboard(args: TUseDashboardCommandArg) {
    // create spinner
    const spinner = ora(args.start).start()

    // set views path
    const viewsPath = args.views

    // set current path
    const cwd = process.cwd()

    // install required packages
    await exec(['npm i', 'swr next-i18next react-loader-spinner'].join(' '))
    await exec(
        [
            'npm i -D',
            '@types/node @types/react @types/react-dom react-loader-spinner'
        ].join(' ')
    )

    // set targets
    const targets = [
        { filename: '@types/menu.d.ts', values: {} },
        { filename: 'components/Cover.tsx', values: {} },
        { filename: 'components/Header.tsx', values: {} },
        { filename: 'components/LanguageSelector.tsx', values: {} },
        { filename: 'components/Menu.tsx', values: {} },
        { filename: 'components/PrimeReactTheme.tsx', values: {} },
        { filename: 'components/Sidebar.tsx', values: {} },
        { filename: 'components/ThemeSwitcher.tsx', values: {} },
        { filename: 'contexts/LayoutContext.tsx', values: {} },
        { filename: 'contexts/PrimeReactThemeContext.ts', values: {} },
        { filename: 'fetch/fetcher.ts', values: {} },
        { filename: 'fetch/useMenuSwr.ts', values: {} },
        { filename: 'layouts/Dashboard.tsx', values: {} },
        { filename: 'layouts/FitScreen.tsx', values: {} },
        { filename: 'layouts/Layout.tsx', values: {} },
        { filename: 'layouts/Plain.tsx', values: {} },
        { filename: 'pages/api/menu.ts', values: {} },
        { filename: 'pages/post/[pid].tsx', values: {} },
        { filename: 'pages/_app.tsx', values: {} },
        { filename: 'pages/_document.tsx', values: {} },
        { filename: 'pages/help.tsx', values: {} },
        { filename: 'pages/index.tsx', values: {} },
        { filename: 'pages/settings.tsx', values: {} },
        { filename: 'public/favicons/android-chrome-192x192.png' },
        { filename: 'public/favicons/android-chrome-512x512.png' },
        { filename: 'public/favicons/apple-touch-icon.png' },
        { filename: 'public/favicons/browserconfig.xml' },
        { filename: 'public/favicons/favicon-16x16.png' },
        { filename: 'public/favicons/favicon-32x32.png' },
        { filename: 'public/favicons/favicon.ico' },
        { filename: 'public/favicons/mstile-70x70.png' },
        { filename: 'public/favicons/mstile-144x144.png' },
        { filename: 'public/favicons/mstile-150x150.png' },
        { filename: 'public/favicons/mstile-310x150.png' },
        { filename: 'public/favicons/mstile-310x310.png' },
        { filename: 'public/favicons/site.webmanifest' },
        { filename: 'public/fonts/Inter-Bold.woff' },
        { filename: 'public/fonts/Inter-Bold.woff2' },
        { filename: 'public/fonts/Inter-Light.woff' },
        { filename: 'public/fonts/Inter-Light.woff2' },
        { filename: 'public/fonts/Inter-Medium.woff' },
        { filename: 'public/fonts/Inter-Medium.woff2' },
        { filename: 'public/fonts/Inter-Regular.woff' },
        { filename: 'public/fonts/Inter-Regular.woff2' },
        { filename: 'public/fonts/Inter-SemiBold.woff' },
        { filename: 'public/fonts/Inter-SemiBold.woff2' },
        { filename: 'public/fonts/lato-v17-latin-ext_latin-300.woff' },
        { filename: 'public/fonts/lato-v17-latin-ext_latin-300.woff2' },
        { filename: 'public/fonts/lato-v17-latin-ext_latin-700.woff' },
        { filename: 'public/fonts/lato-v17-latin-ext_latin-700.woff2' },
        { filename: 'public/fonts/lato-v17-latin-ext_latin-regular.woff' },
        { filename: 'public/fonts/lato-v17-latin-ext_latin-regular.woff2' },
        { filename: 'public/fonts/poppins-v15-latin-ext_latin-300.woff' },
        { filename: 'public/fonts/poppins-v15-latin-ext_latin-300.woff2' },
        { filename: 'public/fonts/poppins-v15-latin-ext_latin-600.woff' },
        { filename: 'public/fonts/poppins-v15-latin-ext_latin-600.woff2' },
        { filename: 'public/fonts/poppins-v15-latin-ext_latin-700.woff' },
        { filename: 'public/fonts/poppins-v15-latin-ext_latin-700.woff2' },
        { filename: 'public/fonts/poppins-v15-latin-ext_latin-regular.woff' },
        { filename: 'public/fonts/poppins-v15-latin-ext_latin-regular.woff2' },
        { filename: 'public/fonts/roboto-v20-latin-ext_latin-500.woff' },
        { filename: 'public/fonts/roboto-v20-latin-ext_latin-500.woff2' },
        { filename: 'public/fonts/roboto-v20-latin-ext_latin-700.woff' },
        { filename: 'public/fonts/roboto-v20-latin-ext_latin-700.woff2' },
        { filename: 'public/fonts/roboto-v20-latin-ext_latin-regular.woff' },
        { filename: 'public/fonts/roboto-v20-latin-ext_latin-regular.woff2' },
        { filename: 'public/images/logo-dark.svg' },
        { filename: 'public/images/logo-light.svg' },
        { filename: 'public/locales/en/common.json' },
        { filename: 'public/locales/ja/common.json' },
        { filename: 'public/favicon.ico' },
        { filename: 'styles/help.module.css', values: {} },
        { filename: 'styles/index.module.css', values: {} },
        { filename: 'styles/settings.module.css', values: {} },
        { filename: 'next-i18next.config.js', values: {} },
        { filename: 'next.config.js', values: {} }
    ]

    for (const target of targets) {
        // make directory
        fs.mkdirSync(`${path.dirname(target.filename)}`, {
            recursive: true
        })

        if (target.values === undefined) {
            // non template
            fs.copyFileSync(
                `${viewsPath}/${target.filename}`,
                `${cwd}/${target.filename}`
            )
        } else {
            // create template
            const tpl = Eta.compile(
                fs.readFileSync(`${viewsPath}/${target.filename}.eta`, 'utf8')
            )

            // render
            const rendered = tpl(target.values, Eta.config)

            // write file
            fs.writeFileSync(`${cwd}/${target.filename}`, rendered)
        }

        //
    }

    // stop spinner
    spinner.stop()

    // show complete message
    console.log('|'.yellow, args.end)

    //
}

// EOF
