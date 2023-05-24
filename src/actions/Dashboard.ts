// Dashboard.ts

import { execa } from 'execa'
import { deployFiles } from '../commands'

export default async function (opts: any) {
    // move to created project directory
    process.chdir(`${opts.dest}`)

    // install packages
    await execa(`npm`, [
        'i',
        'react-loader-spinner',
        'nookies',
        'swr',
        '@next/mdx',
        '@mdx-js/loader',
        '@mdx-js/react',
        '@prisma/client'
    ])

    // install packages for development
    await execa(`npm`, [
        'i',
        '-D',
        'prisma',
        'modern-css-reset',
        'next-translate-plugin'
    ])

    // deploy files
    deployFiles(opts.src, opts.dest, {}, {})

    //
}

// EOF
