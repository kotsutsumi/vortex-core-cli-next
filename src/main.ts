import { program } from 'commander'
import packageJson from '../package.json'

const main = () => {
    // set current package version
    const version = packageJson.version
    program.version(version, '-v, --version').parse(process.argv)

    console.log('Vortex Core CLI for Next.js')

    //
}

main()

// EOF
