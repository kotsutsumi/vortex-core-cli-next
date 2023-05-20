// index.ts

import AddPage from './commands/AddPage'
import CreateProject from './commands/CreateProject'
import KeyGen from './commands/KeyGen'
import ParseLicense from './commands/ParseLicense'
import NodeRSA from 'node-rsa'
import fs from 'fs'
import packageJson from '../package.json'
import path from 'path'
import { Command } from 'commander'

// set home directory
const userHome =
    process.env[process.platform == 'win32' ? 'USERPROFILE' : 'HOME']

// set vortex-code directory
const vortexCodeDir = path.join(userHome as string, '.vortex-core')

// set private key path
const privateKeyPath = path.join(vortexCodeDir, 'id_rsa')

// set public key path
const publicKeyPath = path.join(vortexCodeDir, 'id_rsa.pub')

// set key
let key = new NodeRSA({ b: 1024 })

// check `${HOME}/.vortex-code` directory
if (!fs.existsSync(vortexCodeDir)) {
    // make directory
    fs.mkdirSync(vortexCodeDir, { recursive: true })
}

// create private key
if (!fs.existsSync(privateKeyPath)) {
    // generate key
    const privateKey = key.exportKey('pkcs1-private-pem')

    // write private key
    fs.writeFileSync(privateKeyPath, privateKey, { mode: 0o600 })
}

// create public key
if (!fs.existsSync(publicKeyPath)) {
    // generate key
    const publicKey = key.exportKey('pkcs1-public-pem')

    // write public key
    fs.writeFileSync(publicKeyPath, publicKey, { mode: 0o600 })
}

// create a commander program
const program = new Command()

// set application information
program
    .name(packageJson.name)
    .description(packageJson.description)
    .version(packageJson.version)

// register commands

// create
CreateProject(program)

// add-page
AddPage(program)

// keygen
KeyGen(program)

// parse-license
ParseLicense(program)

// parse arguments
program.parse()

// EOF
