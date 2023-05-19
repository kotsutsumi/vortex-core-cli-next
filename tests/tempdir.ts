// tempdir.ts

import fs from 'fs'
import os from 'os'
import path from 'path'

export default function (run: Function) {
    let tmpDir
    const appPrefix = 'vortex-core-cli'

    try {
        tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), appPrefix))
        run(tmpDir)
    } catch {
        // handle error
    } finally {
        try {
            if (tmpDir) {
                fs.rmSync(tmpDir, { recursive: true })
            }
        } catch (e) {
            console.error(
                `An error has occurred while removing the temp folder at ${tmpDir}. Please remove it manually. Error: ${e}`
            )
        }
    }

    //
}

// EOF
