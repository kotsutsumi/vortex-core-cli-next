import { runner } from '../commands/runner'
import { TUsePrettierArg } from './idnex'

export function usePrettier(args: TUsePrettierArg) {
    //

    runner(args, async (complete: Function) => {
        // complete
        complete()
    })

    // TODO: create ".prettierrc"

    //
}

// EOF
