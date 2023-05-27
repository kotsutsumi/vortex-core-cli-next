// getDict.ts

import 'server-only'

import getLang from './getLangByServer'
import { getDictionary } from '@/app/dictionaries'

export default async () => {
    // return dictionary
    return await getDictionary(getLang())

    //
}

// EOF
