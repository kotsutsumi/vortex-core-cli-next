// ParseLicense.ts

import NodeRSA from 'node-rsa'
import fs from 'fs'
import globSync from 'glob'
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

    // read private key
    const privateKey = fs.readFileSync(privateKeyPath, 'utf8')

    // read public key
    const publicKey = fs.readFileSync(publicKeyPath, 'utf8')

    // set key
    const key = new NodeRSA(privateKey + publicKey)

    // set result
    const result: any = {}

    // find license file
    globSync(`${vortexCodeDir}/*.key`, (err, files) => {
        files.forEach((file) => {
            // parse license type
            const licenseType = file
                .split('-')
                .pop()
                ?.split('.')
                .shift() as string

            // read license file
            const encrypted = fs.readFileSync(file, 'utf8')

            // decrypt license file
            const decrypted = key.decrypt(encrypted, 'utf8')

            // set result
            result[licenseType] = JSON.parse(decrypted)
        })

        // output result
        console.log(JSON.stringify(result))
    })

    //
}

// EOF
