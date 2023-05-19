// Plain.ts

import { execa } from 'execa'
import { deployFiles } from '../../commands'

export default async function (opts: any) {
    // deploy files
    await deployFiles(opts.src, `${opts.dest}`, {
        page_path: opts.page_path
    })

    //
}

// EOF
