// useEslint.ts

import * as Eta from 'eta'
import fs from 'fs'
import ora from 'ora'
import { TUsePrettierCommandArg } from '../index.d'

export async function useEslint(args: TUsePrettierCommandArg) {
    // create spinner
    const spinner = ora(args.start).start()

    // set views path
    const viewsPath = args.views

    // set current path
    const cwd = process.cwd()

    // command
    const cmd = 'npm i -D eslint eslint-config-next eslint-plugin-storybook'

    // set filename
    const filename = '.eslintrc.json'

    // create template
    const tpl = Eta.compile(
        fs.readFileSync(`${viewsPath}/${filename}.eta`, 'utf8')
    )

    // render
    const rendered = tpl({}, Eta.config)

    // output file
    fs.writeFileSync(`${cwd}/${filename}`, rendered)

    // stop spinner
    spinner.stop()

    // show complete message
    console.log('|'.yellow, args.end)

    //
}

// EOF
