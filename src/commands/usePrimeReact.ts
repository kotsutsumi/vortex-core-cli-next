// usePrimeReact.ts

import * as Eta from 'eta'
import childProcess from 'child_process'
import fs from 'fs'
import ora from 'ora'
import path from 'path'
import util from 'util'
import { TUsePrimeReactCommandArg } from '../index.d'

const exec = util.promisify(childProcess.exec)

export async function usePrimeReact(args: TUsePrimeReactCommandArg) {
    // create spinner
    const spinner = ora(args.start).start()

    // set views path
    const viewsPath = args.views

    // set current path
    const cwd = process.cwd()

    // command
    const cmd = 'npm i primereact primeicons primeflex'

    // exec command
    const res = await exec(`${cmd}`)

    // set targets
    const targets = [
        {
            filename: 'pages/_app.tsx',
            values: {}
        },
        {
            filename: 'pages/index.tsx',
            values: {}
        },
        {
            filename: 'styles/globals.css',
            values: {}
        },
        {
            filename: 'styles/index.module.css',
            values: {}
        },
        { filename: 'components/prime-react-themes/aryaBlue.tsx' },
        { filename: 'components/prime-react-themes/aryaGreen.tsx' },
        { filename: 'components/prime-react-themes/aryaOrange.tsx' },
        { filename: 'components/prime-react-themes/aryaPurple.tsx' },
        { filename: 'components/prime-react-themes/bootstrap4DarkBlue.tsx' },
        { filename: 'components/prime-react-themes/bootstrap4DarkPurple.tsx' },
        { filename: 'components/prime-react-themes/bootstrap4LightBlue.tsx' },
        { filename: 'components/prime-react-themes/bootstrap4LightPurple.tsx' },
        { filename: 'components/prime-react-themes/fluentLight.tsx' },
        { filename: 'components/prime-react-themes/laraDarkBlue.tsx' },
        { filename: 'components/prime-react-themes/laraDarkIndigo.tsx' },
        { filename: 'components/prime-react-themes/laraDarkPurple.tsx' },
        { filename: 'components/prime-react-themes/laraDarkTeal.tsx' },
        { filename: 'components/prime-react-themes/laraLightBlue.tsx' },
        { filename: 'components/prime-react-themes/laraLightIndigo.tsx' },
        { filename: 'components/prime-react-themes/laraLightPurple.tsx' },
        { filename: 'components/prime-react-themes/laraLightTeal.tsx' },
        { filename: 'components/prime-react-themes/lunaAmber.tsx' },
        { filename: 'components/prime-react-themes/lunaBlue.tsx' },
        { filename: 'components/prime-react-themes/lunaGreen.tsx' },
        { filename: 'components/prime-react-themes/lunaPink.tsx' },
        { filename: 'components/prime-react-themes/mdcDarkDeeppurple.tsx' },
        { filename: 'components/prime-react-themes/mdcDarkIndigo.tsx' },
        { filename: 'components/prime-react-themes/mdcLightDeeppurple.tsx' },
        { filename: 'components/prime-react-themes/mdcLightIndigo.tsx' },
        { filename: 'components/prime-react-themes/mdDarkDeeppurple.tsx' },
        { filename: 'components/prime-react-themes/mdDarkIndigo.tsx' },
        { filename: 'components/prime-react-themes/mdLightDeeppurple.tsx' },
        { filename: 'components/prime-react-themes/mdLightIndigo.tsx' },
        { filename: 'components/prime-react-themes/mira.tsx' },
        { filename: 'components/prime-react-themes/nano.tsx' },
        { filename: 'components/prime-react-themes/nova.tsx' },
        { filename: 'components/prime-react-themes/novaAccent.tsx' },
        { filename: 'components/prime-react-themes/novaAlt.tsx' },
        { filename: 'components/prime-react-themes/rhea.tsx' },
        { filename: 'components/prime-react-themes/sagaBlue.tsx' },
        { filename: 'components/prime-react-themes/sagaGreen.tsx' },
        { filename: 'components/prime-react-themes/sagaOrange.tsx' },
        { filename: 'components/prime-react-themes/sagaPurple.tsx' },
        { filename: 'components/prime-react-themes/sohoDark.tsx' },
        { filename: 'components/prime-react-themes/sohoLight.tsx' },
        { filename: 'components/prime-react-themes/tailwindLight.tsx' },
        { filename: 'components/prime-react-themes/velaBlue.tsx' },
        { filename: 'components/prime-react-themes/velaGreen.tsx' },
        { filename: 'components/prime-react-themes/velaOrange.tsx' },
        { filename: 'components/prime-react-themes/velaPurple.tsx' },
        { filename: 'components/prime-react-themes/vivaDark.tsx' },
        { filename: 'components/prime-react-themes/vivaLight.tsx' }
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

    // stop spinner
    spinner.stop()

    // show complete message
    console.log('|'.yellow, args.end)

    //
}

// EOF
