// index.ts

import * as Eta from 'eta'
import chalk from 'chalk'
import fs from 'fs'
import glob from 'glob'
import ora, { Color } from 'ora'
import path from 'path'
import { Command } from 'commander'

// spinner colors
const spinnerColors = [
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
    'gray'
]

export const displayTitle = (commandName: string) => {
    // output title
    console.log('')
    console.log(
        chalk.bgGray(chalk.black(' Vortex Core CLI ')) + ' ' + commandName
    )
    console.log('')
}

// register command
export default function registerCommand(
    program: Command,
    command_name: string,
    args: any,
    opts: any[] | null,
    run: (...args: any[]) => void | Promise<void>
) {
    // create command
    const cmd = program.command(command_name)

    for (const t of args) {
        cmd.argument(t.type, t.desc)
    }

    if (opts) {
        for (const o of opts) {
            cmd.option(o[0], o[1], o[2])
        }
    }

    // set action
    cmd.action(run)

    //
}

// task runner
export const runner = async (tasks: any, done: Function) => {
    // init spinner color
    let color = 0

    // run each task
    for (const t of tasks) {
        let spinner: any = undefined

        if (t.title) {
            // start spinner
            spinner = ora(t.title).start()
        }

        // set interval spinner color
        const inetrval = setInterval(() => {
            if (t.title) {
                spinner.color = spinnerColors[
                    ++color % spinnerColors.length
                ] as Color
            }
        }, 500)

        // set start time
        const startTime = performance.now()

        // run task
        await t.task(t.opts)

        // set end time
        const endTime = performance.now()

        // clear interval
        clearInterval(inetrval)

        if (t.title) {
            // stop spinner
            spinner.stop()

            // set time unit
            const timeWithUnit =
                endTime - startTime < 1000
                    ? Math.round(endTime - startTime) + 'ms'
                    : Math.round((endTime - startTime) / 100) / 10 + 's'

            // output title
            console.log(
                `${chalk.green('  ✓')} ${chalk.gray(t.title)} (${timeWithUnit})`
            )
        }

        //
    }

    // done
    done()

    //
}

export const deployFiles = async (
    templateDir: string,
    dest: string,
    templateOpts: any = {},
    replacePaths: any = {}
) => {
    for (const iterator of [`${templateDir}/**/.??*`, `${templateDir}/**/*`]) {
        glob(iterator, (err, files) => {
            files.forEach((file) => {
                var stats = fs.statSync(file)
                if (stats.isDirectory()) {
                    let destDir = `${dest}/${file.replace(templateDir, '')}`

                    for (const key in replacePaths) {
                        if (replacePaths.hasOwnProperty(key)) {
                            destDir = destDir.replace(
                                `[${key}]`,
                                replacePaths[key]
                            )
                        }
                    }

                    // make directory
                    fs.mkdirSync(destDir, { recursive: true })
                } else {
                    for (const key in replacePaths) {
                        if (replacePaths.hasOwnProperty(key)) {
                            // make directory
                            const destDir = path
                                .dirname(
                                    `${dest}/${file
                                        .split('.')
                                        .slice(0, -1)
                                        .join('.')
                                        .replace(templateDir, '')}`
                                )
                                .replace(`[${key}]`, replacePaths[key])
                            fs.existsSync(destDir) ||
                                fs.mkdirSync(destDir, { recursive: true })
                        }
                    }

                    if (path.extname(file) == '.eta') {
                        let destPath = `${dest}/${file
                            .split('.')
                            .slice(0, -1)
                            .join('.')
                            .replace(templateDir, '')}`

                        for (const key in replacePaths) {
                            if (replacePaths.hasOwnProperty(key)) {
                                destPath = destPath.replace(
                                    `[${key}]`,
                                    replacePaths[key]
                                )
                            }
                        }

                        fs.writeFileSync(
                            destPath,
                            Eta.compile(fs.readFileSync(file, 'utf8'))(
                                templateOpts,
                                Eta.config
                            )
                        )
                    } else {
                        let destPath = `${dest}/${file.replace(
                            templateDir,
                            ''
                        )}`

                        for (const key in replacePaths) {
                            if (replacePaths.hasOwnProperty(key)) {
                                destPath = destPath.replace(
                                    `[${key}]`,
                                    replacePaths[key]
                                )
                            }
                        }
                        fs.copyFileSync(file, destPath)
                    }
                }
            })
        })
    }

    //
}

// EOF
