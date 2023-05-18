// CreateProject.ts

import CreateNextApp from '../actions/CreateNextApp'
import Eslint from '../actions/Eslint'
import FirebaseAuth from '../actions/FirebaseAuth'
import Jest from '../actions/Jest'
import Prettier from '../actions/Prettier'
import PrimeReact from '../actions/PrimeReact'
import chalk from 'chalk'
import childProcess from 'child_process'
import path from 'path'
import registerCommand, { displayTitle, runner } from '.'
import util from 'util'
import { Command } from 'commander'

// set promisify exec
const exec = util.promisify(childProcess.exec)

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
    registerCommand(program, command_name, args, run)

    //
}

const run = async (project_name: string) => {
    // display title
    displayTitle('Create New Next App Project')

    // execute tasks
    runner(
        [
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
            },
            {
                title: 'Setup eslintrc.json',
                task: Eslint,
                opts: {
                    src: path.join(__dirname, '../templates/Eslint'),
                    dest: `${process.cwd()}/${project_name}`
                }
            },
            {
                title: 'Setup Jest',
                task: Jest,
                opts: {
                    src: path.join(__dirname, '../templates/Jest'),
                    dest: `${process.cwd()}/${project_name}`
                }
            },
            {
                title: 'Setup PrimeReact',
                task: PrimeReact,
                opts: {
                    src: path.join(__dirname, '../templates/PrimeReact'),
                    dest: `${process.cwd()}/${project_name}`
                }
            },
            {
                title: 'Setup FirebaseAuth',
                task: FirebaseAuth,
                opts: {
                    src: path.join(__dirname, '../templates/FirebaseAuth'),
                    dest: `${process.cwd()}/${project_name}`
                }
            }
        ],
        () => {
            console.log('')
            console.log('')
            console.log(chalk.cyanBright('Next steps:'))

            const nextCommand = chalk.yellow(
                `cd ${project_name} && npm run dev`
            )

            console.log(`  run \`${nextCommand}\` to start development server.`)
        }
    )

    //
}

// EOF
