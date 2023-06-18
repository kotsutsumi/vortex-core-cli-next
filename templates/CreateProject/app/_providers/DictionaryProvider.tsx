// Dictionary.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import isProduction from '@/app/_libs/vortexcore/isProduction'
import { dictAtom } from '@/app/_atoms/dict'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

// DictionaryProvider
export default function DictionaryProvider({
    initialData
}: {
    initialData: any
}) {
    //

    // set dict recoil state
    const setDict = useSetRecoilState(dictAtom)

    // set current locale
    const [initialized, setInitialized] = useState(false)

    // set initial dictionary data for "production"
    if (isProduction()) {
        setDict(initialData)
    }

    // useEffect is a React hook that runs a function when the component is
    useEffect(() => {
        //

        if (initialized == false) {
            //

            // set initial dictionary data for "development"
            if (!isProduction()) {
                setDict(initialData)
            }

            // set initialized
            setInitialized(true)

            //
        }

        //
    }, [setDict, initialData, initialized])

    // ------------------------------------------------------------------------

    return <></>

    //
}

// EOF
