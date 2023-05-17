// Eslint.ts

import { execa } from 'execa'
import * as Eta from 'eta'
import fs from 'fs'

export default async function (opts: any) {
    // move to created project directory
    process.chdir(`${opts.dest}`)

    // install packages
    const { stdout } = await execa(`npm`, [
        'i',
        '-D',
        'eslint',
        'eslint-config-next',
        'eslint-plugin-storybook'
    ])

    // create ".prettierrc" template
    const tpl = Eta.compile(
        fs.readFileSync(`${opts.src}/.eslintrc.json.eta`, 'utf8')
    )

    // render
    const rendered = tpl({}, Eta.config)

    // output file
    fs.writeFileSync(`${opts.dest}/.eslintrc.json`, rendered)

    //
}

// EOF
