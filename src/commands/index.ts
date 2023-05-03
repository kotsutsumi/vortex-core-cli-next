// index.ts

import fs from 'fs'
import path from 'path'
import * as Eta from 'eta'
import { create } from './create'
import { useDashboard } from './useDashboard'
import { useFirebaseAuth } from './useFirebaseAuth'
import { usePrettier } from './usePrettier'
import { useEslint } from './useEslint'
import { usePrimeReact } from './usePrimeReact'
import { useJest } from './useJest'
import { addPage } from './addPage'

// set runners
export default {
    create: create,
    'add-page': addPage,
    'use-dashboard': useDashboard,
    'use-firebase-auth': useFirebaseAuth,
    'use-prettier': usePrettier,
    'use-eslint': useEslint,
    'use-jest': useJest,
    'use-prime-react': usePrimeReact
}

export function renderFile(viewsPath: string, cwd: string, targets: any) {
    for (const target of targets) {
        if (target.output) {
            // make directory
            fs.mkdirSync(`${path.dirname(target.output)}`, {
                recursive: true
            })
        } else {
            // make directory
            fs.mkdirSync(`${path.dirname(target.filename)}`, {
                recursive: true
            })
        }

        if (target.values === undefined) {
            if (target.output) {
                // non template
                fs.copyFileSync(
                    `${viewsPath}/${target.filename}`,
                    `${cwd}/${target.output}`
                )
            } else {
                // non template
                fs.copyFileSync(
                    `${viewsPath}/${target.filename}`,
                    `${cwd}/${target.filename}`
                )
            }
        } else {
            // create template
            const tpl = Eta.compile(
                fs.readFileSync(`${viewsPath}/${target.filename}.eta`, 'utf8')
            )

            // render
            const rendered = tpl(target.values, Eta.config)

            if (target.output) {
                // write file
                fs.writeFileSync(`${cwd}/${target.output}`, rendered)
            } else {
                // write file
                fs.writeFileSync(`${cwd}/${target.filename}`, rendered)
            }

            //
        }

        //
    }

    //
}

// EOF
