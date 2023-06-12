// CreateProject.ts

import CreateNextApp from '../actions/CreateNextApp'
import Jest from '../actions/Jest'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import registerCommand, { displayTitle, runner } from '.'
import { Command } from 'commander'

// set command name
const command_name = 'create'

export default function register(program: Command) {
    // arguments
    const args = [
        {
            type: '<string>',
            desc: 'project name'
        }
    ]

    // register command
    registerCommand(program, command_name, args, null, run)

    //
}

const run = async (project_name: string) => {
    // display title
    displayTitle('Create New Next App Project')

    // execute tasks
    runner(
        [
            {
                title: 'Create new vortex-core app',
                task: CreateNextApp,
                opts: {
                    project_name: project_name,
                    src: path.join(__dirname, '../templates/CreateProject'),
                    dest: `${process.cwd()}/${project_name}`
                }
            }
        ],
        () => {
            console.log('')
            console.log('')
            console.log(chalk.cyanBright('Next Step:'))

            const nextCommand = chalk.yellow(
                `cd ${project_name} && npm run dev`
            )

            console.log(`  run \`${nextCommand}\` to start development server.`)

            // set status file paths
            const statusFilePath = `${process.cwd()}/.vortex-core`
            const statusFileName = 'status.json'

            // make directory
            fs.mkdirSync(statusFilePath, { recursive: true })

            // write status file
            fs.writeFileSync(
                `${statusFilePath}/${statusFileName}`,
                JSON.stringify({
                    success: true,
                    message: 'done'
                })
            )

            //
        }
    )

    //
}

// EOF
