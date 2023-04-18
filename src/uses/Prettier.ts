import { runner } from '../commands/runner'
import { TUsePrettierArg } from './index'

export function usePrettier(args: TUsePrettierArg) {
    //

    runner(args, async (complete: Function) => {
        //

        // TODO: create ".prettierrc"

        // complete
        complete()

        //
    })

    //
}

// EOF
