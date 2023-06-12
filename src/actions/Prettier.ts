// Prettier.ts

import { deployFiles } from '../commands'

export default async function (opts: any) {
    // deploy files
    await deployFiles(opts.src, opts.dest, {}, {})

    //
}

// EOF
