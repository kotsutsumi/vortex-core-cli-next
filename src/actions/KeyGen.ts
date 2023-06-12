// KeyGen.ts

import NodeRSA from 'node-rsa'
import fs from 'fs'
import path from 'path'

export default async function (opts: any) {
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

    // read private key
    const privateKey = fs.readFileSync(privateKeyPath, 'utf8')

    // read public key
    const publicKey = fs.readFileSync(publicKeyPath, 'utf8')

    // set key from public key
    key = new NodeRSA(publicKey)

    // set target text
    const text = JSON.stringify({
        username: opts.username,
        organization: opts.organization,
        expires: opts.expires,
        secret: opts.secret
    })

    // encrypt
    const encrypted = key.encrypt(text, 'base64')

    // save license key
    fs.writeFileSync(path.join(vortexCodeDir, 'license-nextjs.key'), encrypted)

    // const key2 = new NodeRSA(publicKey)
    // // encrypt
    // const encrypted2 = key2.encrypt(text, 'base64')
    // // console.log(encrypted2)

    // // set key3
    // const key3 = new NodeRSA(privateKey + publicKey)
    // const decrypted = key3.decrypt(encrypted, 'utf8')

    // console.log('')
    // console.log('')
    // console.log('')

    // console.log(decrypted)

    //
}

// EOF
