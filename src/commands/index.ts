// index.ts

import * as Eta from 'eta'
import fs from 'fs'
import glob from 'glob'
import path from 'path'
import { Command } from 'commander'

// register command
export default function registerCommand(
    program: Command,
    command_name: string,
    args: any,
    run: (...args: any[]) => void | Promise<void>
) {
    // create command
    const cmd = program.command(command_name)

    for (const t of args) {
        cmd.argument(t.type, t.desc)
    }

    // set action
    cmd.action(run)

    //
}

// task runner
export const runner = async (tasks: any) => {
    // run each task
    for (const t of tasks) {
        // run task
        await t.task(t.opts)
    }

    //
}

export const deployFiles = async (
    templateDir: string,
    dest: string,
    templateOpts: any = {}
) => {
    glob(`${templateDir}/**/*`, (err, files) => {
        files.forEach((file) => {
            var stats = fs.statSync(file)
            if (stats.isDirectory()) {
                // make directory
                fs.mkdirSync(`${dest}/${file.replace(templateDir, '')}`, {
                    recursive: true
                })
            } else {
                if (path.extname(file) == '.eta') {
                    fs.writeFileSync(
                        `${dest}/${file
                            .split('.')
                            .slice(0, -1)
                            .join('.')
                            .replace(templateDir, '')}`,
                        Eta.compile(fs.readFileSync(file, 'utf8'))(
                            templateOpts,
                            Eta.config
                        )
                    )
                } else {
                    fs.copyFileSync(
                        file,
                        `${dest}/${file.replace(templateDir, '')}`
                    )
                }
            }
        })
    })
}

// EOF
