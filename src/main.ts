import * as yargs from 'yargs'
import format from './enums/format'
import { create } from './commands/create'

const main = () => {
    const argv = yargs
        .command('create', 'create a new project', (argv) => {
            create({
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
        .demandCommand(1)
        .help().argv

    //
}

main()

// EOF
