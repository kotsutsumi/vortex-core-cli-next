// addPage.ts

import * as Eta from 'eta'
import fs from 'fs'
import ora from 'ora'
import { TAddPageCommandArg } from '../index.d'
import { renderFile } from '.'

export async function addPage(args: TAddPageCommandArg) {
    // create spinner
    const spinner = ora(args.start).start()

    // set views path
    const viewsPath = args.views

    // set current path
    const cwd = process.cwd()

    // set template name
    const template = args.template

    // set page name
    const pageName = args.pageName

    // set page path
    const pagePath = args.pagePath

    // set targets
    const targets = {
        // plain
        plain: [
            {
                filename: `.templates/${template}/styles/page.module.css`,
                output: `styles/${pagePath}/${pageName}.module.css`,
                values: {
                    page_name: pageName,
                    page_path: pagePath
                }
            },
            {
                filename: `.templates/${template}/pages/page.tsx`,
                output: `pages/${pagePath}/${pageName}.tsx`,
                values: {
                    page_name: pageName,
                    page_path: pagePath
                }
            }
        ]

        // profile
    }

    // renderFiles
    // @ts-ignore
    renderFile(viewsPath as string, cwd, targets[template])

    // stop spinner
    spinner.stop()

    // show complete message
    console.log('|'.yellow, args.end)

    //
}

// EOF
