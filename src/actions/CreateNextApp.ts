// CreateNextApp.ts

import { execa } from 'execa'

export default async function (opts: { project_name: string }) {
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
        '"@/*"'
    ]

    const { stdout } = await execa(`npx`, params)
    console.log(stdout)
    //
}

// EOF
