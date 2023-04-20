// command.ts

const COMMAND = {
    CREATE: 'create',
    USE: 'use'
} as const

export default COMMAND

export type command = typeof COMMAND[keyof typeof COMMAND]

// EOF
