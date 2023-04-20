// index.ts

import 'colors-cli/toxic'
import * as path from 'path'
import format from './enums/format'
import packageJson from '../package.json'
import yargs from 'yargs'
import { log } from 'console'
import FORMAT from './enums/format'
//
import cliSpinners from 'cli-spinners'
import * as Eta from 'eta'
import fs from 'fs'
import ora from 'ora'
import COMMAND from './enums/command'
import { create } from './commands/create'
import { usePrettier } from './commands/usePrettier'

// set app name
const appName = packageJson.name

// set app version
const appVersion = packageJson.version

// set script directory
const __dirname = path.dirname(__filename)

// set views directory
const viewsPath = path.join(__dirname, '../views')

// define TCommandArg type
export type TCommandArg = {
    command: typeof COMMAND.CREATE | typeof COMMAND.USE
    start: string
    end: string
    format: typeof FORMAT.TEXT | typeof FORMAT.JSON
    views?: string
}

export type TCreateCommandArg = TCommandArg & {
    projectName: string
}

export type TUseCommandArg = TCommandArg & {
    featureName: string
}

// init commands
const commands: Array<TCreateCommandArg | TUseCommandArg> = []

// set runners
const runners = {
    create: create,
    'use-prettier': usePrettier
}

// parse command
const parseCommand = (params: yargs.Argv<{ format: 'text' }>) => {
    // @ts-ignore
    const _args = params.argv['_']

    // set options
    const _opts = params.argv

    // set format
    const _format =
        // @ts-ignore
        (_opts.format as string) === FORMAT.JSON ? FORMAT.JSON : FORMAT.TEXT

    return [_args, _opts, _format]

    //
}

// parse args
const args = yargs

    // --- Format Option
    .option('format', {
        alias: 'f',
        description: 'output format: "json" or "text", default to "text"',
        default: format.TEXT,
        demandOption: true
    })

    // --- Create Command
    .command('create <project>', 'create a new project', (params) => {
        // parse command
        const v = parseCommand(params)

        // set project name
        const projectName = v[0][1]

        // push command
        commands.push({
            command: 'create',
            end: `created ${projectName} project.`,
            format: v[2],
            projectName: projectName,
            start: 'creating a new project...'
        })

        //
    })

    // --- Use Features
    .command('use <feature>', 'use a feature', (params) => {
        // parse command
        const v = parseCommand(params)

        // set feature name
        const featureName = v[0][1]

        // push command
        commands.push({
            command: 'use',
            end: `applied ${featureName} feature.`,
            featureName: featureName,
            format: v[2],
            start: `applying ${featureName} feature...`,
            views: viewsPath
        })

        //
    })

    // ---
    .demandCommand(1)
    .parseSync()

// set output format
const outputFormat = args.format

// display header
if (outputFormat == format.TEXT) {
    log(`${appName.blue.bold} v${appVersion}`)
}

// run commands
for (const c of commands) {
    // set runner
    // @ts-ignore
    const runner = runners[c.command]

    runner(c)
    //
}

for (const runner in runners) {
}

log(commands)

// create spinner
// const spinner = ora('xxxx').start()

// log(cliSpinners.dots)

// const num: number = +process.argv[2]
// log('hoge'.red)

// const tpl = Eta.compile(fs.readFileSync(`${viewsPath}/.prettierrc`, 'utf8'))

// render
// const rendered = tpl({}, Eta.config)
// log(rendered)

// display done
if (outputFormat == format.TEXT) {
    log('\ndone.'.black_bt)
}

// EOF
