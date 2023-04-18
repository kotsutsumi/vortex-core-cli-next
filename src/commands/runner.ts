// runner.ts

import 'colors-cli/toxic'
import format from '../enums/format'
import packageJson from '../../package.json'
import rl from 'readline'
import { TBaseCommandArg } from '.'
import { TBaseUseArg } from '../uses'

export function runner(args: TBaseCommandArg | TBaseUseArg, target: Function) {
    // create spinner
    const spinner = new (require('cli-spinner').Spinner)(`%s ${args.caption}`)

    // show header
    if (args.format == format.TEXT) {
        // show spinner
        spinner.setSpinnerString('⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏')
        spinner.start()

        //
    }

    // process
    target((success: boolean) => {
        // stop spinner
        spinner.stop()

        // clear line
        rl.clearLine(process.stdout, 0)
        rl.cursorTo(process.stdout, 0)

        if (success != false) {
            console.log('|', args.done.green)
        }

        //
    })

    // show header
    if (args.format == format.TEXT) {
        // footer()
    }

    //
}

// EOF
