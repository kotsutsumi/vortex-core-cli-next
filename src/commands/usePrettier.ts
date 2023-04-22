// usePrettier.ts

import * as Eta from 'eta'
import fs from 'fs'
import { TUsePrettierCommandArg } from '../index.d'
import ora from 'ora'

export async function usePrettier(args: TUsePrettierCommandArg) {
    // create spinner
    const spinner = ora(args.start).start()

    // set views path
    const viewsPath = args.views

    // set current path
    const cwd = process.cwd()

    // set filename
    const filename = '.prettierrc'

    // create template
    const tpl = Eta.compile(
        fs.readFileSync(`${viewsPath}/${filename}.eta`, 'utf8')
    )

    // render
    const rendered = tpl(
        {
            tabWidth: 4,
            singleQuote: true,
            semi: false,
            trailingComma: 'none'
        },
        Eta.config
    )

    // output file
    fs.writeFileSync(`${cwd}/${filename}`, rendered)

    // stop spinner
    spinner.stop()

    // show complete message
    console.log('|'.yellow, args.end)

    //
}

// EOF
