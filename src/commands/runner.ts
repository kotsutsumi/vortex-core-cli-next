// runner.ts

import 'colors-cli/toxic'
import format from '../enums/format'
import packageJson from '../../package.json'
import rl from 'readline'
import { TBaseCommandArg } from '..'

const Title = packageJson.description

export function runner(args: TBaseCommandArg, target: Function) {
    // create spinner
    const spinner = new (require('cli-spinner').Spinner)('processing.. %s')

    // show header
    if (args.format == format.TEXT) {
        // show title
        const versionText = 'v' + packageJson.version

        console.log('')
        console.log(`${Title.x45} ${versionText.white}`)
        console.log('')

        // show spinner
        spinner.setSpinnerString('|/-\\')
        spinner.start()

        //
    }

    // process
    target(() => {
        // stop spinner
        spinner.stop()

        // clear line
        rl.clearLine(process.stdout, 0)
        rl.cursorTo(process.stdout, 0)

        console.log('done.'.black_bt)

        //
    })

    // show header
    if (args.format == format.TEXT) {
        // footer()
    }

    //
}

// EOF
