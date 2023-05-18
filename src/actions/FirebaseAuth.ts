// FirebaseAuth.ts

import childProcess from 'child_process'
import fs from 'fs'
import path from 'path'
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

    // deploy files
    await deployFiles(opts.src, opts.dest, {})

    // set home directory
    const userHome =
        process.env[process.platform == 'win32' ? 'USERPROFILE' : 'HOME']

    // copy from ~/.firebase-auth/.env
    if (
        fs.existsSync(path.join(userHome as string, '.firebase-auth', '.env'))
    ) {
        fs.copyFileSync(
            path.join(userHome as string, '.firebase-auth', '.env'),
            `${opts.dest}/.env`
        )
    } else {
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
    }

    // copy from ~/.firebase-auth/firebaseSecretKey.json
    if (
        fs.existsSync(
            path.join(
                userHome as string,
                '.firebase-auth',
                'firebaseSecretKey.json'
            )
        )
    ) {
        fs.copyFileSync(
            path.join(
                userHome as string,
                '.firebase-auth',
                'firebaseSecretKey.json'
            ),
            `${opts.dest}/firebaseSecretKey.json`
        )
    } else {
        // create "firebaseSecretKey.json"
        fs.writeFileSync(
            `${opts.dest}/firebaseSecretKey.json`,
            [
                '{',
                '  "type": "service_account",',
                '  "project_id": "xxxx-xxxxxx",',
                '  "private_key_id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",',
                '  "private_key": "-----BEGIN PRIVATE KEY-----\\nxxxxxxxx\\n-----END PRIVATE KEY-----\\n",',
                '  "client_email": "firebase-adminsdk-xxxxx@xxxx-xxxxxx.iam.gserviceaccount.com",',
                '  "client_id": "xxxxxxxxxxxxxxxxxxxxx",',
                '  "auth_uri": "https://accounts.google.com/o/oauth2/auth",',
                '  "token_uri": "https://oauth2.googleapis.com/token",',
                '  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",',
                '  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxxxxxxxxx-xxxxxx.iam.gserviceaccount.com"',
                '}'
            ].join('\n')
        )
    }

    //
}

// EOF
