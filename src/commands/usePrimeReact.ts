// usePrimeReact.ts

import * as Eta from 'eta'
import childProcess from 'child_process'
import fs from 'fs'
import ora from 'ora'
import path from 'path'
import util from 'util'
import { TUsePrimeReactCommandArg } from '../index.d'

const exec = util.promisify(childProcess.exec)

export async function usePrimeReact(args: TUsePrimeReactCommandArg) {
    // create spinner
    const spinner = ora(args.start).start()

    // set views path
    const viewsPath = args.views

    // set current path
    const cwd = process.cwd()

    // command
    const cmd = 'npm i primereact primeicons primeflex'

    // exec command
    const res = await exec(`${cmd}`)

    // set targets
    const targets = [
        {
            filename: 'pages/_app.tsx',
            values: {}
        },
        {
            filename: 'pages/index.tsx',
            values: {}
        },
        {
            filename: 'styles/globals.css',
            values: {}
        },
        {
            filename: 'styles/Home.module.css',
            values: {}
        }
    ]

    for (const target of targets) {
        // create template
        const tpl = Eta.compile(
            fs.readFileSync(`${viewsPath}/${target.filename}`, 'utf8')
        )

        // render
        const rendered = tpl(target.values, Eta.config)

        // exec command
        const res = await exec(`mkdir -p ${path.dirname(target.filename)}`)

        // output file
        fs.writeFileSync(`${cwd}/${target.filename}`, rendered)

        //
    }

    // stop spinner
    spinner.stop()

    // show complete message
    console.log('|'.yellow, args.end)

    //
}

// EOF
