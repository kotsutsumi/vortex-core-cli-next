// create.ts

import childProcess from 'child_process'
import fs from 'fs'
import ora from 'ora'
import util from 'util'
import { TCreateCommandArg } from '../index.d'

const exec = util.promisify(childProcess.exec)

export async function create(args: TCreateCommandArg) {
    // command
    const cmd = 'npx create-next-app@latest'

    // project name
    const projectName = args.projectName

    // parameters
    const params = [
        '--ts',
        '--use-npm',
        '--eslint',
        '--no-src-dir',
        '--no-tailwind',
        '--no-experimental-app',
        '--import-alias',
        '"@/*"'
    ]

    // check existing project
    if (fs.existsSync(`${process.cwd()}/${projectName}`)) {
        console.log(
            '| Error: '.red + `${projectName.white.bold} already exists.`
        )
        process.exit(1)
    }

    // create spinner
    const spinner = ora(args.start).start()

    // exec command
    const res = await exec(`${cmd} ${projectName} ${params.join(' ')}`)

    // move to created project directory
    process.chdir(`./${projectName}`)

    // stop spinner
    spinner.stop()

    // show complete message
    console.log('|'.yellow, args.end)

    //
}

// EOF
