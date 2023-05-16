// CreateProject.ts

import childProcess from 'child_process'
import registerCommand, { runner } from '.'
import util from 'util'
import { Command } from 'commander'
import CreateNextApp from '../actions/CreateNextApp'

// set promisify exec
const exec = util.promisify(childProcess.exec)

// set command name
const command_name = 'create'

export default function register(program: Command) {
    // .argument('<string>', 'string to split')

    // arguments
    const args = [
        {
            type: '<string>',
            desc: 'project name'
        }
    ]

    // register command
    registerCommand(program, command_name, args, run)

    //
}

const run = async (project_name: string) => {
    // execute tasks
    runner([
        {
            title: 'Create new next app',
            task: CreateNextApp,
            opts: {
                project_name: project_name
            }
        }
    ])

    //
}

// EOF
