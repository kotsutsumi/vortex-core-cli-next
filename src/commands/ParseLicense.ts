// ParseLicense.ts

import registerCommand, { displayTitle, runner } from '.'
import { Command } from 'commander'
import KeyGen from '../actions/KeyGen'
import ParseLicense from '../actions/ParseLicense'

// set command name
const command_name = 'parse-license'

export default function register(program: Command) {
    //

    // arguments
    const args: any[] = []

    // register command
    registerCommand(program, command_name, args, null, run)

    //
}

const run = async () => {
    // execute tasks
    runner(
        [
            {
                task: ParseLicense,
                opts: {}
            }
        ],
        () => {
            //
        }
    )
    //
}
