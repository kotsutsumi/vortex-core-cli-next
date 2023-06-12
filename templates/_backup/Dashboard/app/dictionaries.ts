// dictionaries.ts

import 'server-only'

const dictionaries: { en: any; ja: any } = {
    en: () =>
        // @ts-ignore
        import('./_dictionaries/en/common.json').then(
            (module) => module.default
        ),
    ja: () =>
        // @ts-ignore
        import('./_dictionaries/ja/common.json').then(
            (module) => module.default
        )
}

// @ts-ignore
export const getDictionary = async (locale: any) => dictionaries[locale]()

// EOF
