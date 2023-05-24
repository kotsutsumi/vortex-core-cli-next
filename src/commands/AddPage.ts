// AddPage.ts

import CRUD from '../actions/AddPage/CRUD'
import List from '../actions/AddPage/List'
import ListDetail from '../actions/AddPage/ListDetail'
import Plain from '../actions/AddPage/Plain'
import chalk from 'chalk'
import path from 'path'
import registerCommand, { displayTitle, runner } from '.'
import { Command } from 'commander'

// set command name
const command_name = 'add-page'

export default function register(program: Command) {
    // arguments
    const args = [
        {
            type: '<string>',
            desc: 'page path'
        }
    ]

    // options
    const opts = [
        ['-t, --type <page-type>', "page type (default: 'plain')", 'plain']
    ]

    // register command
    registerCommand(program, command_name, args, opts, run)

    //
}

const run = async (page_path: any, opts: any) => {
    // display title
    displayTitle('Add Page')

    // set title
    let title = null

    // set action
    let action = null

    // set action_opts
    let action_opts = {}

    if (opts.type === 'plain') {
        title = 'Add Plain Page'
        action = Plain
        action_opts = {
            page_path: page_path,
            src: path.join(__dirname, '../templates/AddPage/Plain'),
            dest: `${process.cwd()}`
        }
    } else if (opts.type === 'list') {
        title = 'Add List Page'
        action = List
        action_opts = {
            page_path: page_path,
            src: path.join(__dirname, '../templates/AddPage/List'),
            dest: `${process.cwd()}`
        }
    } else if (opts.type === 'list-detail') {
        title = 'Add List Detail Page'
        action = ListDetail
        action_opts = {
            page_path: page_path,
            src: path.join(__dirname, '../templates/AddPage/ListDetail'),
            dest: `${process.cwd()}`
        }
    } else if (opts.type == 'crud') {
        title = 'Add CRUD Page'
        action = CRUD
        action_opts = {
            page_path: page_path,
            src: path.join(__dirname, '../templates/AddPage/CRUD'),
            dest: `${process.cwd()}`
        }
    }

    if (!action) {
        console.log(chalk.redBright('invalid page type'))
        return
    }

    // execute tasks
    runner(
        [
            {
                title: title,
                task: action,
                opts: action_opts
            }
        ],
        () => {
            console.log('')
            console.log('')
            console.log(chalk.cyanBright('done.'))
        }
    )

    //
}

// EOF
