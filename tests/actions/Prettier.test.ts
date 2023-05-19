// Prettier.test.ts

import Prettier from '../../src/actions/Prettier'
import fs from 'fs'
import tempdir from '../tempdir'

test('setup prettier.rc', () => {
    tempdir((tmpDir: string) => {
        Prettier({
            src: `${process.cwd()}/templates/Prettier`,
            dest: tmpDir
        })

        // check file
        expect(fs.existsSync(`${tmpDir}/.prettierrc`)).toBe(true)

        //
    })

    //
})

// EOF
