// index.ts

import 'colors-cli/toxic'
import * as path from 'path'
import FORMAT from './enums/format'
import format from './enums/format'
import packageJson from '../package.json'
import runners from './commands'
import yargs from 'yargs'
import {
    TAddPageCommandArg,
    TCreateCommandArg,
    TUseCommandArg
} from './index.d'
import { log } from 'console'
import { exit } from 'process'
import TEMPLATE from './enums/template'

// set app name
const appName = packageJson.name

// set app version
const appVersion = packageJson.version

// set script directory
const __dirname = path.dirname(__filename)

// set views directory
const viewsPath = path.join(__dirname, '../views')

// init commands
const commands: Array<TCreateCommandArg | TUseCommandArg | TAddPageCommandArg> =
    []

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

// push feature command
const pushFeatureCommand = (
    featureName: string,
    format: typeof FORMAT.TEXT | typeof FORMAT.JSON
) => {
    // @ts-ignore
    if (runners[`use-${featureName}`] === undefined) {
        console.log(
            '| Error: '.red,
            `${featureName.white.bold} is invalid feature name.`
        )
        process.exit(1)
    }

    commands.push({
        command: `use-${featureName}`,
        end: `applied ${featureName} feature.`,
        featureName: featureName,
        format: format,
        start: `applying ${featureName} feature...`,
        views: viewsPath
    })

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

    // --- Template Option
    .option('template', {
        alias: 't',
        description: 'page template: "plain", "profile" , default to "plain"',
        default: TEMPLATE.PLAIN,
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

        // dependencies feature
        for (const featureName of [
            'prettier',
            'eslint',
            'jest',
            'prime-react',
            'firebase-auth',
            'dashboard'
        ]) {
            pushFeatureCommand(featureName, v[2])
        }

        //
    })

    // --- Use Features
    .command('use <feature>', 'use a feature', (params) => {
        // parse command
        const v = parseCommand(params)

        // set feature name
        const featureName = v[0][1]

        // push command
        pushFeatureCommand(featureName, v[2])

        //
    })

    // --- Add Page
    .command('add-page <page> <path>', 'add a new page', (params) => {
        // parse command
        const v = parseCommand(params)

        // set page name
        const pageName = v[0][1]

        // set page path
        const pagePath = v[0][2]

        // set options
        const _opts = params.argv

        // set template
        const _template =
            // @ts-ignore
            _opts.template as string

        if (_template !== TEMPLATE.PLAIN && _template !== TEMPLATE.PROFILE) {
            console.log(
                '| Error: '.red,
                `${_template.white.bold} is invalid template name.`
            )
            process.exit(1)
        }

        // push command
        commands.push({
            command: `add-page`,
            end: `added ${pageName} page to pages${pagePath}${pageName}.tsx.`,
            pageName: pageName,
            pagePath: pagePath,
            format: format,
            template: _template,
            start: `add ${pageName} page to pages${pagePath}${pageName}.tsx...`,
            views: viewsPath
        })

        //
    })

    // ---

    .demandCommand(2)
    .parseSync()

// set output format
const outputFormat = args.format

// display header
if (outputFormat == format.TEXT) {
    log(`${appName.blue.bold} v${appVersion}\n`)
}

// run commands
;(async () => {
    for (const c of commands) {
        // start runner
        // @ts-ignore
        await runners[c.command](c)
    }

    // display done
    if (outputFormat == format.TEXT) {
        log('\ndone.'.black_bt)
    }

    //
})()

// EOF
