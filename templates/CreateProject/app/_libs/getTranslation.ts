// getTranslation.ts

import { useRecoilValue } from 'recoil'
import { dictAtom } from '@/app/_atoms/dict'

const getTranslation = () => {
    //

    // get dict recoil state
    const value = useRecoilValue(dictAtom)

    // ------------------------------------------------------------------------

    // set dict recoil state
    return (key: string) => {
        return (value as any)[key] || key
    }

    //
}

export default getTranslation

// EOF
