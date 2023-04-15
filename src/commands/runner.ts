// runner.ts

import { TBaseCommandArg } from '..'
import format from '../enums/format'
import { footer, header } from '../render'

export function runner(args: TBaseCommandArg, target: Function) {
    // show header
    if (args.format == format.TEXT) {
        header()
    }

    // process
    target()

    // show header
    if (args.format == format.TEXT) {
        footer()
    }

    //
}

// EOF
