// create.ts

import { TCreateCommandArg } from '..'
import { exec } from 'child_process'
import { runner } from './runner'

export function create(args: TCreateCommandArg) {
    //

    runner(args, (complete: Function) => {
        const cmd = 'npx create-next-app@latest'
        const projectName = 'my-next-app'
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

        exec(
            `${cmd} ${projectName} ${params.join(' ')}`,
            (err, stdout, stderr) => {
                if (err) {
                    console.log(`stderr: ${stderr}`)
                    return
                }
                complete()
            }
        )

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
