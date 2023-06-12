// DarkModeProvider.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { darkModeAtom } from '@/app/_atoms/dark-mode'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

// DarkModeProvider
export default function DarkModeProvider({ darkMode }: { darkMode: boolean }) {
    //

    // set dark-mode to Recoil Atom
    const setDarkMode = useSetRecoilState(darkModeAtom)

    // useEffect is a React hook that runs a function when the component is
    useEffect(() => {
        //

        // set cookies
        const cookies = parseCookies()

        // set lang to Recoil Atom
        setDarkMode(darkMode || cookies['dark-mode'] === 'true' ? true : false)

        //
    })

    // ------------------------------------------------------------------------

    return <></>

    //
}

// EOF
