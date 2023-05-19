// PrimeReact.ts

import { execa } from 'execa'
import { deployFiles } from '../commands'

export default async function (opts: any) {
    // move to created project directory
    process.chdir(`${opts.dest}`)

    // install packages
    const { stdout } = await execa(`npm`, [
        'i',
        'primereact',
        'primeicons',
        'primeflex'
    ])

    // deploy files
    await deployFiles(opts.src, opts.dest, {}, {})

    //
}

// EOF
