// Jest.ts

import { execa } from 'execa'
import { deployFiles } from '../commands'

export default async function (opts: any) {
    // move to created project directory
    process.chdir(`${opts.dest}`)

    // install packages
    const { stdout } = await execa(`npm`, [
        'i',
        '-D',
        'ts-jest',
        'jest',
        'jest-environment-jsdom',
        '@playwright/test',
        '@testing-library/react',
        '@testing-library/user-event',
        '@testing-library/jest-dom',
        '@types/testing-library__jest-dom',
        '@types/testing-library__user-event',
        '@testing-library/react',
        '@testing-library/jest-dom',
        '@types/jest'
    ])

    // deploy files
    deployFiles(opts.src, opts.dest, {})

    //
}

// EOF
