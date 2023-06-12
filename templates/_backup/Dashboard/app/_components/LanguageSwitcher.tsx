// LanguageSwitcher.tsx

import React, { useEffect, useState } from 'react'
import getLang from '@/libs/vortexcore/misc/getLang'
import t from '@/libs/vortexcore/misc/transtate'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { setCookie } from 'nookies'

interface Language {
    name: string
    code: string
}

interface LanguageSwitcherProps {
    cookieMaxAge?: number
}

// dd
export default function LanguageSwitcher(props: LanguageSwitcherProps) {
    // define languages
    let languages: Language[] = [
        // @ts-ignore
        { name: t('japanese'), code: 'ja' },
        // @ts-ignore
        { name: t('english'), code: 'en' }
    ]

    // use language state
    const [selectedLanguage, setSelectedLanguage] = useState<Language>()

    // on change event handler
    const onChange = (e: DropdownChangeEvent) => {
        // set cookie
        setCookie(null, 'locale', e.value.code, {
            maxAge: props.cookieMaxAge || 60 * 60 * 24 * 30,
            path: '/'
        })

        // reload
        window.location.reload()

        //
    }

    // simular to componentDidMount
    useEffect(() => {
        setSelectedLanguage(
            (() => {
                for (const index in languages) {
                    if (languages[index].code === getLang()) {
                        return languages[index]
                    }
                }

                return languages[0]

                //
            })()
        )
    }, [])

    // ------------------------------------------------------------------------

    return (
        <>
            {/* @ts-ignore */}
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
