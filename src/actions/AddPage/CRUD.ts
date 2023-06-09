// CRUD.ts

import fs from 'fs'
import { deployFiles } from '../../commands'
import { execa } from 'execa'

export default async function (opts: any) {
    //

    // move to created project directory
    process.chdir(`${opts.dest}`)

    // install packages
    const { stdout } = await execa(`npm`, ['i', 'prisma-client'])

    fs.appendFileSync(
        `${opts.dest}/.env`,
        `# This was inserted by \`prisma init\`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema
        
# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings
        
DATABASE_URL="file:./dev.db"
`
    )

    await execa(`npx`, ['-y', 'prisma', 'generate'])

    // deploy files
    await deployFiles(
        opts.src,
        `${opts.dest}`,
        {
            page_path: opts.page_path
        },
        {
            page_path: opts.page_path
        }
    )

    return {
        success: true,
        message: 'done.'
    }

    //
}

// EOF
