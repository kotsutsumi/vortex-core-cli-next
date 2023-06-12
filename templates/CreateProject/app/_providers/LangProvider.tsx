// LangProvider.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { langAtom } from '@/app/_atoms/lang'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

// LangProvider
export default function LangProvider({
    preferredLang
}: {
    preferredLang: string
}) {
    //

    // set lang to Recoil Atom
    const setLang = useSetRecoilState(langAtom)

    // useEffect is a React hook that runs a function when the component is
    useEffect(() => {
        //

        // set lang to Recoil Atom
        setLang(preferredLang)

        //
    })

    // ------------------------------------------------------------------------

    return <></>

    //
}

// EOF
