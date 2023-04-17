// runner.ts

import 'colors-cli/toxic'
import format from '../enums/format'
import packageJson from '../../package.json'
import rl from 'readline'
import { TBaseCommandArg } from '.'
import { TBaseUseArg } from '../uses/idnex'

const Title = packageJson.description

export function runner(
    args: TBaseCommandArg | TBaseUseArg,
    target: Function,
    caption?: string
) {
    // create spinner
    const spinner = new (require('cli-spinner').Spinner)('processing.. %s')

    // show header
    if (args.format == format.TEXT) {
        // show title
        const versionText = 'v' + packageJson.version

        console.log('')
        console.log(`${Title.x45} ${versionText.white}`)

        if (caption) {
            console.log('')
            console.log(`⚡ ${caption.blue.bold}`)
        }

        console.log('')

        // show spinner
        spinner.setSpinnerString('|/-\\')
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
            console.log('done.'.black_bt)
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
