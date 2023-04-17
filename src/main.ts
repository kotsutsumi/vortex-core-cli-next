import * as yargs from 'yargs'
import format from './enums/format'
import uses from './enums/uses'
import { create } from './commands/create'
import { usePrimeReact } from './uses/PrimeReact'
import { useDashboard } from './uses/Dashboard'
import { useFirebaseAuth } from './uses/FirebaseAuth'
import { usePrettier } from './uses/Prettier'

const main = () => {
    // define options
    // const opts = {
    //     // TyepScript
    //     ts: {
    //         description: 'Initialize as a TypeScript project. (default: true)',
    //         default: true,
    //         demandOption: true
    //     },
    //     'no-ts': {
    //         description:
    //             'Disable initialize as a TypeScript project. (default: false)',
    //         default: false,
    //         demandOption: true
    //     },

    //     // JavaScript
    //     js: {
    //         description: 'Initialize as a JavaScript project. (default: false)',
    //         default: false,
    //         demandOption: true
    //     },
    //     tailwind: {
    //         description: 'Initialize with Tailwind CSS config. (default: true)',
    //         default: true,
    //         demandOption: true
    //     },

    //     // ESLint
    //     eslint: {
    //         description: 'Initialize with eslint config. (default: true)',
    //         default: true,
    //         demandOption: true
    //     },
    //     'no-eslint': {
    //         description:
    //             'Disable initialize with eslint config. (default: false)',
    //         default: false,
    //         demandOption: true
    //     },

    //     'experimental-app': {
    //         description:
    //             'Initialize as a `app/` directory project. (default: false)',
    //         default: false,
    //         demandOption: true
    //     },

    //     // src directory
    //     'src-dir': {
    //         description:
    //             'Initialize inside a `src/` directory. (default: false)',
    //         default: false,
    //         demandOption: true
    //     },
    //     'no-src-dir': {
    //         description:
    //             'Initialize inside a `src/` directory. (default: true)',
    //         default: true,
    //         demandOption: true
    //     },

    //     'import-alias <alias-to-configure>': {
    //         description: 'Specify import alias to use (default "@/*").',
    //         default: '@/*',
    //         demandOption: true
    //     },

    //     // Use npm
    //     'use-npm': {
    //         description:
    //             'Explicitly tell the CLI to bootstrap the app using npm. (default: true)',
    //         default: true,
    //         demandOption: true
    //     },
    //     'no-use-npm': {
    //         description:
    //             'Disdable explicitly tell the CLI to bootstrap the app using npm. (default: false)',
    //         default: false,
    //         demandOption: true
    //     },

    //     // Use pnpm
    //     'use-pnpm': {
    //         description:
    //             'Explicitly tell the CLI to bootstrap the app using pnpm. (default: false)',
    //         default: true,
    //         demandOption: true
    //     },
    //     'example [name]|[github-url]': {
    //         alias: 'e',
    //         description:
    //             'An example to bootstrap the app with. You can use an example name ' +
    //             'from the official Next.js repo or a GitHub URL. The URL can use ' +
    //             'any branch and/or subdirectory (default: false)',
    //         default: true,
    //         demandOption: true
    //     },
    //     'example-path <path-to-example>': {
    //         description:
    //             'In a rare case, your GitHub URL might contain a branch name with' +
    //             'a slash (e.g. bug/fix-1) and the path to the example (e.g. foo/bar).' +
    //             'In this case, you must specify the path to the example separately:' +
    //             '--example-path foo/bar',
    //         default: true,
    //         demandOption: true
    //     },
    //     'reset-preferences': {
    //         description:
    //             'Explicitly tell the CLI to reset any stored preferences. (default: false)',
    //         default: true,
    //         demandOption: true
    //     }
    // }

    const useFeatures = {
        dashboard: useDashboard,
        prettier: usePrettier,
        'prime-react': usePrimeReact,
        'firebase-auth': useFirebaseAuth
    }

    const argv = yargs
        .command('create <project>', 'create a new project', (argv) => {
            // set params
            const params: any = argv.argv

            create({
                // project name
                projectName: params['_'][1],

                // Format
                format:
                    // @ts-ignore
                    format.JSON == argv.argv.format ? format.JSON : format.TEXT
            })
        })
        .option('format', {
            alias: 'f',
            description: 'output format: "json" or "text", default to "text"',
            default: format.TEXT,
            demandOption: true
        })
        .command('use <feature>', 'use a feature', (argv) => {
            // set params
            const params: any = argv.argv

            // set feature name
            const featureName = params['_'][1]

            // @ts-ignore
            const feature = useFeatures[featureName]

            if (feature === undefined) {
                // show error message
                console.log(`❌ unknown feature: ${featureName}`)
                return
            }

            // apply feature
            feature({
                // Format
                format:
                    // @ts-ignore
                    format.JSON == argv.argv.format ? format.JSON : format.TEXT
            })

            //
        })
        .demandCommand(1)
        .help().argv

    // console.log(argv.command('use'))

    //
}

main()

// EOF
