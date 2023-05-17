// FirebaseAuth.ts

import childProcess from 'child_process'
import fs from 'fs'
import util from 'util'
import { deployFiles } from '../commands'
import { execa } from 'execa'

const exec = util.promisify(childProcess.exec)

export default async function (opts: any) {
    // move to created project directory
    process.chdir(`${opts.dest}`)

    // install packages
    const { stdout } = await execa(`npm`, [
        'i',
        'next-auth',
        'recoil',
        'firebase',
        'firebase-admin'
    ])

    // add "firebaseSecretKey.json" to .gitignore
    fs.writeFileSync(
        `${opts.dest}/.gitignore`,
        fs.readFileSync(`${opts.dest}/.gitignore`, 'utf8') +
            ['', '# Firebase Authentication', 'firebaseSecretKey.json'].join(
                '\n'
            )
    )

    // add NEXTAUTH_SECRET to .env.local
    const nextauth_secret = (
        await exec(['openssl', 'rand', '-base64', '32'].join(' '))
    ).stdout

    fs.writeFileSync(
        `${opts.dest}/.env.local`,
        `NEXTAUTH_SECRET=${nextauth_secret}`
    )

    // create .env
    fs.writeFileSync(
        `${opts.dest}/.env`,
        [
            'NEXT_PUBLIC_Aopts.destPI_KEY=<API_KEY>',
            'NEXT_PUBLIC_AUTH_DOMAIN=<AUTH_DOMAIN>',
            'NEXT_PUBLIC_PROJECT_ID=<PROJECT_ID>',
            'NEXT_PUBLIC_STORAGE_BUCKET=<STORAGE_BUCKET>',
            'NEXT_PUBLIC_MESSAGIN_SENDER_ID=<MESSAGIN_SENDER_ID>',
            'NEXT_PUBLIC_APP_ID=<APP_ID>',
            'NEXT_MEASUREMENT_ID=<MEASUREMENT_ID>'
        ].join('\n')
    )

    // deploy files
    deployFiles(opts.src, opts.dest, {})

    //
}

// EOF
