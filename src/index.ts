// index.ts

import { Command } from 'commander'
import packageJson from '../package.json'
import CreateProject from './commands/CreateProject'

// create a commander program
const program = new Command()

// set application information
program
    .name(packageJson.name)
    .description(packageJson.description)
    .version(packageJson.version)

// program
//     .command('split')
//     .description('Split a string into substrings and display as an array')
//     // .argument('<string>', 'string to split')
//     .option('--first', 'display just the first substring')
//     .option('-s, --separator <char>', 'separator character', ',')
//     .action((str, options) => {
//         // const limit = options.first ? 1 : undefined
//         // console.log(str.split(options.separator, limit))
//         console.log('hogehoge')
//     })

// register commands

// create
CreateProject(program)

program.parse()

// EOF
