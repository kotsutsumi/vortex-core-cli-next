// Dict.tsx

// import { dictState } from '@/app/_atoms/dict'
import { useRecoilState } from 'recoil'

export default function Dict({ serverDict }: { serverDict: any }) {
    // use darkmode recoil state
    const [dict, setDict] = useRecoilState(dictState)

    // set dict
    setDict(serverDict)

    // ------------------------------------------------------------------------

    return <></>

    //
}

// EOF
