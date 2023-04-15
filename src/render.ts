import 'colors-cli/toxic'
import packageJson from '../package.json'

const Title = packageJson.description

// import color from 'colors-cli'
// const error = color.red.bold
// const warn = color.yellow
// const notice = color.blue

export function json() {
    // console.log('create.ts')
}

export function header() {
    const versionText = 'v' + packageJson.version

    console.log('')
    console.log(`${Title.x45} ${versionText.white}`)
    console.log('')
}

export function footer() {
    console.log('done.'.black_bt)
}

export function stdout() {
    //
}

export function render() {}

// EOF
