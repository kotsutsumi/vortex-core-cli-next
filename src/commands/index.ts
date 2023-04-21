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

// EOF
