// Dashboard.ts

import fs from 'fs'
import { deployFiles } from '../commands'
import { execa } from 'execa'

export default async function (opts: any) {
    // move to created project directory
    process.chdir(`${opts.dest}`)

    // install packages
    await execa(`npm`, [
        'i',
        'react-loader-spinner',
        'nookies',
        'server-only',
        'serverless-mysql',
        'swr',
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

    // add ".env" to .gitignore
    fs.writeFileSync(
        `${opts.dest}/.gitignore`,
        fs.readFileSync(`${opts.dest}/.gitignore`, 'utf8') +
            ['', '.env'].join('\n')
    )

    //
}

// EOF
