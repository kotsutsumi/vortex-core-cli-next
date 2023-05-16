// index.ts

import { Command } from 'commander'

// register command
export default function registerCommand(
    program: Command,
    command_name: string,
    args: any[],
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
export const runner = async (
    tasks: [
        {
            title: string
            task: (...args: any[]) => void | Promise<void>
            opts: {}
        }
    ]
) => {
    // run each task
    for (const t of tasks) {
        // run task
        await t.task(t.opts)
    }

    //
}

// EOF
