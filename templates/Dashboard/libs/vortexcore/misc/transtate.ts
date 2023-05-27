// transtalate.ts

import { dictState } from '../atoms/dict'
import { useRecoilValue } from 'recoil'

export default (key: string): string => {
    // set dictionary from ReactRecoil
    const dict = useRecoilValue(dictState)

    // exists key in dictionary?
    if (dict.hasOwnProperty(key)) {
        // return translated key
        return (dict as any)[key]
    }

    // return key
    return key

    //
}

// EOF
