// index.ts

import ora from 'ora'
import { create } from './create'
import { useDashboard } from './useDashboard'
import { useFirebaseAuth } from './useFirebaseAuth'
import { usePrettier } from './usePrettier'
import { usePrimeReact } from './usePrimeReact'
import { log } from 'console'

// set runners
export default {
    create: create,
    'use-dashboard': useDashboard,
    'use-firebase-auth': useFirebaseAuth,
    'use-prettier': usePrettier,
    'use-prime-react': usePrimeReact
}

export const run = (
    startText: string,
    endText: string | null,
    process: Function
) => {
    // create spinner
    const spinner = ora(startText).start()

    // proccess
    process()

    // stop spinner
    spinner.stop()

    // show complete message
    if (endText !== null) {
        log('|'.yellow, endText)
    }

    //
}

// EOF
