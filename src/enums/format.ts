// format.ts

const FORMAT = {
    TEXT: 'text',
    JSON: 'json'
} as const

export default FORMAT

export type format = typeof FORMAT[keyof typeof FORMAT]

// EOF
