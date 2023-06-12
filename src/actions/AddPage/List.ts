// List.ts

import { execa } from 'execa'
import { deployFiles } from '../../commands'

export default async function (opts: any) {
    // // move to created project directory
    // process.chdir(`${opts.dest}`)

    // // install packages
    // const { stdout } = await execa(`npm`, ['i', 'swr'])

    // deploy files
    await deployFiles(
        opts.src,
        `${opts.dest}`,
        {
            page_path: opts.page_path
        },
        {
            page_path: opts.page_path
        }
    )

    return {
        success: true,
        message: 'done.'
    }

    //
}

// EOF
