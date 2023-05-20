// KeyGen.ts

import chalk from 'chalk'
import registerCommand, { displayTitle, runner } from '.'
import { Command } from 'commander'
import KeyGen from '../actions/KeyGen'

// set command name
const command_name = 'keygen'

export default function register(program: Command) {
    // arguments
    const args = [
        {
            type: '<username>',
            desc: 'Username'
        },
        {
            type: '<organization>',
            desc: 'Organization'
        },
        {
            type: '<expires>',
            desc: 'Expires date'
        },
        {
            type: '<secret>',
            desc: 'Secret for encrypting the license key'
        }
    ]

    // register command
    registerCommand(program, command_name, args, null, run)

    //
}

const run = async (
    username: string,
    organization: string,
    expires: string,
    secret: string
) => {
    // display title
    displayTitle('Generate license key')

    // execute tasks
    runner(
        [
            {
                title: 'Generate license key',
                task: KeyGen,
                opts: {
                    username: username,
                    organization: organization,
                    expires: expires,
                    secret: secret
                }
            }
        ],
        () => {
            console.log('')
            console.log('')
            console.log(chalk.cyanBright('Done:'))
            //
        }
    )

    //
}

// EOF
