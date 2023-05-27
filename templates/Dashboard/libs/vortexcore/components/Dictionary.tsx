// Dictionary.tsx

import { dictState } from '@/libs/vortexcore/atoms/dict'
import { useSetRecoilState } from 'recoil'

export default ({ data }: { data: any }) => {
    // use darkmode recoil state
    const setDict = useSetRecoilState(dictState)

    // set dictionary to atom
    setDict(data)

    // ------------------------------------------------------------------------

    return <></>

    //
}

// EOF
