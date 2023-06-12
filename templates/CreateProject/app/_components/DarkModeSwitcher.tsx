// DarkModeSwitcher.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import getTranslation from '@/app/_libs/getTranslation'
import isDarkMode from '@/app/_libs/isDarkMode'
import toggleDarkMode from '@/app/_libs/toggleDarkMode'
import { Button } from 'primereact/button'
import { darkModeAtom } from '@/app/_atoms/dark-mode'
import { parseCookies, setCookie } from 'nookies'
import { useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

// 60s x 60m x 24h x 30d
const cookieMaxAge = 60 * 60 * 24 * 30

// DarkModeSwitcher
export default function DarkModeSwitcher({
    initDarkMode,
    onChange
}: {
    initDarkMode: boolean
    onChange?: Function
}) {
    //

    // set translation
    const t = getTranslation()

    // use darkmode recoil state
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)

    // tooltip state
    const [tooltip, setTooltip] = useState('')

    // set dark-mode tooltip text
    const darkModeText = t('dark-mode')

    // set light-mode tooltip text
    const lightModeText = t('light-mode')

    // useEffect is a React hook that runs a function when the component is
    useEffect(() => {
        //

        // set tooltip
        setTooltip(isDarkMode() === false ? darkModeText : lightModeText)

        //
    }, [darkModeText, lightModeText])

    // change theme event handler process
    const onChangeHandler = (darkmode: boolean) => {
        //

        // update tooltip
        setTooltip(!isDarkMode() === false ? darkModeText : lightModeText)

        // set darkmode
        toggleDarkMode(!isDarkMode())

        // set darkmode state
        setDarkMode(isDarkMode())

        // set cookie
        setCookie(null, 'dark-mode', isDarkMode() ? 'true' : 'false', {
            maxAge: cookieMaxAge,
            path: '/'
        })

        // call onChange
        if (onChange !== undefined) {
            onChange(isDarkMode())
        }

        //
    }

    // ------------------------------------------------------------------------

    return (
        <>
            <Button
                icon={`pi pi-${
                    darkMode === null
                        ? initDarkMode
                            ? 'sun'
                            : 'moon'
                        : darkMode
                        ? 'sun'
                        : 'moon'
                }`}
                rounded
                text
                severity="secondary"
                aria-label="Dark Mode"
                tooltip={tooltip}
                tooltipOptions={{ position: 'bottom' }}
                onClick={() => {
                    onChangeHandler(true)
                }}
            />
        </>
    )

    //
}

// EOF
