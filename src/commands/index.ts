// index.ts

import { create } from './create'
import { useDashboard } from './useDashboard'
import { useFirebaseAuth } from './useFirebaseAuth'
import { usePrettier } from './usePrettier'
import { useEslint } from './useEslint'
import { usePrimeReact } from './usePrimeReact'
import { useJest } from './useJest'

// set runners
export default {
    create: create,
    'use-dashboard': useDashboard,
    'use-firebase-auth': useFirebaseAuth,
    'use-prettier': usePrettier,
    'use-eslint': useEslint,
    'use-jest': useJest,
    'use-prime-react': usePrimeReact
}

// EOF
