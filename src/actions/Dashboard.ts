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
        'swr',
        '@next/mdx',
        '@mdx-js/loader',
        '@mdx-js/react'
    ])

    // install packages for development
    await execa(`npm`, ['i', '-D', '@vanilla-extract/next-plugin'])

    // deploy files
    deployFiles(opts.src, opts.dest, {}, {})

    //
}

// EOF
