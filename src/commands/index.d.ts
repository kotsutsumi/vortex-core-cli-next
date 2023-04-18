//
// for commands
//

import { TBaseArg } from '..'

export type TBaseCommandArg = TBaseArg & {}

export type TCreateCommandArg = TBaseCommandArg & {
    projectName: string
}

// EOF
