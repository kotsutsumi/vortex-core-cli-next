// main.ts

import * as yargs from 'yargs'
import format from './enums/format'
import packageJson from '../package.json'
import uses from './enums/uses'
import { create } from './commands/create'
import { useDashboard } from './uses/Dashboard'
import { useFirebaseAuth } from './uses/FirebaseAuth'
import { usePrettier } from './uses/Prettier'
import { usePrimeReact } from './uses/PrimeReact'

// show header
const showHeader = () => {
    // show title
    const versionText = 'v' + packageJson.version

    console.log('')
    console.log(`${packageJson.description.x45} ${versionText.white}`)
    console.log('')

    //
}

const main = () => {
    const useFeatures = {
        dashboard: useDashboard,
        prettier: usePrettier,
        'prime-react': usePrimeReact,
        'firebase-auth': useFirebaseAuth
    }

    const argv = yargs
        .command('create <project>', 'create a new project', (argv) => {
            // show header
            showHeader()

            // set params
            const params: any = argv.argv

            // set project name
            const projectName = params['_'][1]

            // validate project name
            if (projectName === undefined) {
                console.log('')
                console.error('project name is required.'.red.bold)
                process.exit(1)
            }

            create({
                // caption
                caption: 'creating a new project...',

                // done
                done: `created ${projectName} project.`,

                // project name
                projectName: projectName,

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
            // show header
            showHeader()

            // set params
            const params: any = argv.argv

            // set feature name
            const featureName = params['_'][1]

            // @ts-ignore
            const feature = useFeatures[featureName]

            if (feature === undefined) {
                // show error message
                console.log(`unknown feature: ${featureName}`.red.bold)
                return
            }

            // apply feature
            feature({
                // done
                done: `applied ${featureName} feature.`,

                // Format
                format:
                    // @ts-ignore
                    format.JSON == argv.argv.format ? format.JSON : format.TEXT
            })

            //
        })
        .demandCommand(1)
        .help().argv

    //
}

main()

// EOF
