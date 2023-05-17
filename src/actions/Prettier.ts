// Prettier.ts

import { execa } from 'execa'
import * as Eta from 'eta'
import fs from 'fs'

export default async function (opts: any) {
    // create ".prettierrc" template
    const tpl = Eta.compile(
        fs.readFileSync(`${opts.src}/.prettierrc.eta`, 'utf8')
    )

    // render
    const rendered = tpl({}, Eta.config)

    // output file
    fs.writeFileSync(`${opts.dest}/.prettierrc`, rendered)

    //
}

// EOF
