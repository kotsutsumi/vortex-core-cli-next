// template.ts

const TEMPLATE = {
    PLAIN: 'plain',
    PROFILE: 'profile'
} as const

export default TEMPLATE

export type template = (typeof TEMPLATE)[keyof typeof TEMPLATE]

// EOF
