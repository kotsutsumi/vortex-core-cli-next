// PrimeReact.ts

import { execa } from 'execa'
import * as Eta from 'eta'
import fs from 'fs'
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
    deployFiles(opts.src, opts.dest, {})

    //
}

// EOF
