// usePrimeReact.ts

import * as Eta from 'eta'
import childProcess from 'child_process'
import fs from 'fs'
import ora from 'ora'
import path from 'path'
import util from 'util'
import { TUsePrimeReactCommandArg } from '../index.d'

const exec = util.promisify(childProcess.exec)

export async function useJest(args: TUsePrimeReactCommandArg) {
    // create spinner
    const spinner = ora(args.start).start()

    // set views path
    const viewsPath = args.views

    // set current path
    const cwd = process.cwd()

    // command
    const cmd =
        'npm i -D ts-jest jest jest-environment-jsdom @playwright/test @testing-library/react @testing-library/user-event @testing-library/jest-dom @types/testing-library__jest-dom @types/testing-library__user-event @testing-library/react @testing-library/jest-dom @types/jest'

    // exec command
    const res = await exec(`${cmd}`)

    // set targets
    const targets = [
        {
            filename: 'jest.config.mjs',
            values: {}
        },
        {
            filename: 'libs/sample.test.ts',
            values: {}
        },
        {
            filename: 'libs/sample.ts',
            values: {}
        }
    ]

    for (const target of targets) {
        // make directory
        fs.mkdirSync(`${path.dirname(target.filename)}`, {
            recursive: true
        })

        if (target.values === undefined) {
            // non template
            fs.copyFileSync(
                `${viewsPath}/${target.filename}`,
                `${cwd}/${target.filename}`
            )
        } else {
            // create template
            const tpl = Eta.compile(
                fs.readFileSync(`${viewsPath}/${target.filename}.eta`, 'utf8')
            )

            // render
            const rendered = tpl(target.values, Eta.config)

            // write file
            fs.writeFileSync(`${cwd}/${target.filename}`, rendered)
        }

        //
    }

    // stop spinner
    spinner.stop()

    // show complete message
    console.log('|'.yellow, args.end)

    //
}

// EOF
