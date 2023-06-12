// ThemeSwitcher.tsx

'use client'

import isDarkMode from '../misc/isDarkMode'
import t from '@/libs/vortexcore/misc/transtate'
import toggleDarkMode, { isCurrentDarkMode } from '../misc/toggleDarkMode'
import { Button } from 'primereact/button'
import { darkModeState } from '@/libs/vortexcore/atoms/dark-mode'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

// 60s x 60m x 24h x 30d
const cookieMaxAge = 60 * 60 * 24 * 30

export default function ThemeSwitcher(props: {
    onChange?: (darkmode: boolean) => void
}) {
    // use darkmode recoil state
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    // tooltip state
    const [tooltip, setTooltip] = useState('')

    // set dark-mode tooltip text
    const darkModeText = t('dark-mode')

    // set light-mode tooltip text
    const lightModeText = t('light-mode')

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        setTooltip(isDarkMode() === false ? darkModeText : lightModeText)
        //
    }, [])

    // change theme event handler process
    const onChange = (darkmode: boolean) => {
        // set darkmode state
        setDarkMode({ enable: darkmode })

        // update tooltip
        setTooltip(!isDarkMode() === false ? darkModeText : lightModeText)

        // set darkmode
        toggleDarkMode(darkmode)

        // set cookie
        setCookie(null, 'dark-mode', darkmode ? 'true' : 'false', {
            maxAge: cookieMaxAge,
            path: '/'
        })

        // call onChange
        if (props.onChange !== undefined) {
            props.onChange(darkmode)
        }

        //
    }

    // ------------------------------------------------------------------------

    return (
        <>
            {isDarkMode() === false && (
                <Button
                    icon="pi pi-moon"
                    rounded
                    text
                    severity="secondary"
                    aria-label="Dark Mode"
                    tooltip={tooltip}
                    tooltipOptions={{ position: 'bottom' }}
                    onClick={() => {
                        onChange(true)
                    }}
                />
            )}
            {isDarkMode() === true && (
                <Button
                    icon="pi pi-sun"
                    rounded
                    text
                    severity="secondary"
                    aria-label="Light Mode"
                    tooltip={tooltip}
                    tooltipOptions={{ position: 'bottom' }}
                    onClick={() => {
                        onChange(false)
                    }}
                />
            )}
        </>
    )

    //
}

// EOF
