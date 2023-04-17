// uses.ts

const USES = {
    DASHBOARD: 'dashboard',
    FIREBASE_AUTH: 'firebase-auth',
    PRETTIER: 'prettier',
    PRIME_REACT: 'prime-react'
} as const

export default USES

export type uses = typeof USES[keyof typeof USES]

// EOF
