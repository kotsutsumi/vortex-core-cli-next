// LanguageSwitcher.tsx

import React, { useState } from 'react'
import getLang from '@/app/_libs/vortexcore/getLang'
import getTranslation from '@/app/_libs/vortexcore/getTranslation'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { setCookie } from 'nookies'

// Language
interface Language {
    name: string
    code: string
}

// Language Switcher Props
interface LanguageSwitcherProps {
    cookieMaxAge?: number
}

// LanguageSwitcher
export default function LanguageSwitcher(props: LanguageSwitcherProps) {
    //

    // set translation
    const t = getTranslation()

    // define languages
    const languages: Language[] = [
        { name: t('japanese'), code: 'ja' },
        { name: t('english'), code: 'en' }
    ]

    // use language state
    const [selectedLanguage, setSelectedLanguage] = useState<Language>()

    // on change event handler
    const onChange = (e: DropdownChangeEvent) => {
        //

        // set cookie
        setCookie(null, 'locale', e.value.code, {
            maxAge: props.cookieMaxAge || 60 * 60 * 24 * 30
        })

        // reload
        window.location.reload()

        //
    }

    if (selectedLanguage == undefined) {
        setTimeout(() => {
            setSelectedLanguage(
                ((): Language => {
                    //

                    for (const index in languages) {
                        if (languages[index].code === getLang()) {
                            return languages[index]
                        }
                    }

                    return languages[0]

                    //
                })()
            )
        }, 10)
    }

    // ------------------------------------------------------------------------

    return (
        <>
            <Dropdown
                value={selectedLanguage}
                onChange={onChange}
                options={languages}
                optionLabel="name"
                className="w-full md:w-14rem"
            />
        </>
    )

    //
}

// EOF
