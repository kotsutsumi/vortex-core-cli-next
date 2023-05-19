// CreateNextApp.ts

import { execa } from 'execa'

export default async function (opts: any) {
    // create-next-app parameters
    const params = [
        'create-next-app@latest',
        opts.project_name,
        '--ts',
        '--use-npm',
        '--eslint',
        '--no-src-dir',
        '--no-tailwind',
        '--experimental-app',
        '--app',
        '--import-alias',
        '@/*'
    ]

    // execute create-next-app
    const { stdout } = await execa(`npx`, params)

    // move to created project directory
    process.chdir(`./${opts.project_name}`)

    //
}

// EOF
