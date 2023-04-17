// create.ts

import util from 'util'
import childProcess from 'child_process'
import { runner } from './runner'
import fs from 'fs'
import { TCreateCommandArg } from '.'

const exec = util.promisify(childProcess.exec)

export function create(args: TCreateCommandArg) {
    //

    runner(args, async (complete: Function) => {
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
            '--experimental-app',
            '--import-alias',
            '"@/*"'
        ]

        // check existing project
        if (fs.existsSync(`${process.cwd()}/${projectName}`)) {
            // failed complete
            complete(false)

            // show error message
            console.log(`❌ ${projectName.white.bold} already exists.`)

            return
        }

        // commands
        const commands = [
            // create a new project
            `${cmd} ${projectName} ${params.join(' ')}`

            // TODO: use prettier

            // TODO: use prime-react

            // TODO: use firebase-auth

            // TODO: use dashboard

            //
        ]

        // iterate commands
        for (const command of commands) {
            // exec command
            const res = await exec(command)

            // console.log(res.stdout)
            // console.log(res.stderr)

            //
        }

        complete()

        // TODO: command process
        /*

npm i primereact primeicon\s primeflex && \
sed -i '1s/^/import "primeflex\/primeflex.css";\n/' pages/_app.tsx && \
sed -i '1s/^/import "primeicons\/primeicons.css";\n/' pages/_app.tsx && \
sed -i '1s/^/import "primereact\/resources\/primereact.min.css";\n/' pages/_app.tsx && \
sed -i '1s/^/import "primereact\/resources\/themes\/saga-blue\/theme.css";\n/' pages/_app.tsx && \
sed -i '1s/^/import { Button } from "primereact\/button";\n/' pages/index.tsx && \
sed -i 's/<Head>/<Button type="submit" label="Submit" icon="pi pi-check" className="p-ml-2" \/>\n<Head>\n/' pages/index.tsx && \
npm run dev
        */
        //
    })

    //
}

// EOF
