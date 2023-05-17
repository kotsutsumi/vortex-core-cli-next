// CreateProject.ts

import CreateNextApp from '../actions/CreateNextApp'
import Prettier from '../actions/Prettier'
import childProcess from 'child_process'
import path from 'path'
import registerCommand, { runner } from '.'
import util from 'util'
import { Command } from 'commander'

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
        },
        {
            title: 'Setup .prettierrc',
            task: Prettier,
            opts: {
                src: path.join(__dirname, '../templates/Prettier'),
                dest: `${process.cwd()}/${project_name}`
            }
        }
    ])

    //
}

// EOF
