// CreateProject.ts

import CreateNextApp from '../actions/CreateNextApp'
import Eslint from '../actions/Eslint'
import Jest from '../actions/Jest'
import Prettier from '../actions/Prettier'
import PrimeReact from '../actions/PrimeReact'
import childProcess from 'child_process'
import path from 'path'
import registerCommand, { runner } from '.'
import util from 'util'
import { Command } from 'commander'
import FirebaseAuth from '../actions/FirebaseAuth'

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
    ])

    //
}

// EOF
