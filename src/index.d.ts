// index.d.ts

// define TCommandArg type
export type TCommandArg = {
    command: typeof COMMAND.CREATE | typeof COMMAND.USE
    start: string
    end: string
    format: typeof FORMAT.TEXT | typeof FORMAT.JSON
    views?: string
}

export type TCreateCommandArg = TCommandArg & {
    projectName: string
}

export type TUseCommandArg = TCommandArg & {
    featureName: string
}

export type TUseDashboardCommandArg = TUseCommandArg & {}

export type TUseFirebaseAuthCommandArg = TUseCommandArg & {}

export type TUsePrettierCommandArg = TUseCommandArg & {}

export type TUsePrimeReactCommandArg = TUseCommandArg & {}

// EOF
