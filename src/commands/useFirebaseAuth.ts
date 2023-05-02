// useFirebaseAuth.ts

import * as Eta from 'eta'
import childProcess from 'child_process'
import fs from 'fs'
import ora from 'ora'
import path from 'path'
import util from 'util'
import { TUseFirebaseAuthCommandArg } from '../index.d'

const exec = util.promisify(childProcess.exec)

export async function useFirebaseAuth(args: TUseFirebaseAuthCommandArg) {
    // create spinner
    const spinner = ora(args.start).start()

    // set views path
    const viewsPath = args.views

    // set current path
    const cwd = process.cwd()

    // install required packages
    await exec(['npm i', 'next-auth', 'firebase', 'firebase-admin'].join(' '))

    // create "firebaseSecretKey.json"
    fs.writeFileSync(
        `${cwd}/firebaseSecretKey.json`,
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

    // add "firebaseSecretKey.json" to .gitignore
    fs.writeFileSync(
        `${cwd}/.gitignore`,
        fs.readFileSync(`${cwd}/.gitignore`, 'utf8') +
            [
                '',
                '',
                '# Firebase Authentication',
                'firebaseSecretKey.json'
            ].join('\n')
    )

    // add NEXTAUTH_SECRET to .env.local
    const nextauth_secret = (
        await exec(['openssl', 'rand', '-base64', '32'].join(' '))
    ).stdout

    fs.writeFileSync(`${cwd}/.env.local`, `NEXTAUTH_SECRET=${nextauth_secret}`)

    // create .env
    fs.writeFileSync(
        `${cwd}/.env`,
        [
            'NEXT_PUBLIC_API_KEY=<API_KEY>',
            'NEXT_PUBLIC_AUTH_DOMAIN=<AUTH_DOMAIN>',
            'NEXT_PUBLIC_PROJECT_ID=<PROJECT_ID>',
            'NEXT_PUBLIC_STORAGE_BUCKET=<STORAGE_BUCKET>',
            'NEXT_PUBLIC_MESSAGIN_SENDER_ID=<MESSAGIN_SENDER_ID>',
            'NEXT_PUBLIC_APP_ID=<APP_ID>',
            'NEXT_MEASUREMENT_ID=<MEASUREMENT_ID>'
        ].join('\n')
    )

    //

    // set targets
    const targets = [
        {
            filename: 'pages/_app.tsx',
            values: {
                nextauth: true
            }
        },
        {
            filename: 'pages/index.tsx',
            values: {
                nextauth: true
            }
        },
        { filename: '@types/next-auth.d.ts', values: { nextauth: true } },
        {
            filename: 'components/auth/Client.tsx',
            values: { nextauth: true }
        },
        { filename: 'libs/firebase/client.ts', values: { nextauth: true } },
        { filename: 'libs/firebase/admin.ts', values: { nextauth: true } },
        {
            filename: 'pages/api/auth/[...nextauth].ts',
            values: { nextauth: true }
        },
        { filename: 'pages/signin/index.tsx', values: { nextauth: true } },
        { filename: 'pages/signout/index.tsx', values: { nextauth: true } },
        {
            filename: 'styles/signin/index.module.css',
            values: {
                nextauth: true
            }
        },
        {
            filename: 'styles/signout/index.module.css',
            values: {
                nextauth: true
            }
        }
    ]

    for (const target of targets) {
        // make directory
        fs.mkdirSync(`${path.dirname(target.filename)}`, {
            recursive: true
        })

        if (target.values === undefined) {
            // non template
            fs.copyFileSync(
                `${viewsPath}/${target.filename}`,
                `${cwd}/${target.filename}`
            )
        } else {
            // create template
            const tpl = Eta.compile(
                fs.readFileSync(`${viewsPath}/${target.filename}.eta`, 'utf8')
            )

            // render
            const rendered = tpl(target.values, Eta.config)

            // write file
            fs.writeFileSync(`${cwd}/${target.filename}`, rendered)
        }

        //
    }

    const userHome =
        process.env[process.platform == 'win32' ? 'USERPROFILE' : 'HOME']

    if (
        fs.existsSync(path.join(userHome as string, '.firebase-auth', '.env'))
    ) {
        fs.copyFileSync(
            path.join(userHome as string, '.firebase-auth', '.env'),
            `${cwd}/.env`
        )
    }

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
            `${cwd}/firebaseSecretKey.json`
        )
    }

    // stop spinner
    spinner.stop()

    // show complete message
    console.log('|'.yellow, args.end)

    //
}
// EOF
