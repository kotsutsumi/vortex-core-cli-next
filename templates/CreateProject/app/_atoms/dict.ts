// dict.ts

import { atom } from 'recoil'

export const dictAtom = atom({
    //

    // atom name
    key: 'app-dict',

    // default value
    default: require('../_dictionaries/ja.json')

    //
})

// EOF
