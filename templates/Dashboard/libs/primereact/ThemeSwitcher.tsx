// ThemeSwitcher.tsx

'use client'

import { Button } from 'primereact/button'
// import { PrimeReactThemeContext } from '@/contexts/PrimeReactThemeContext'
import { useContext, useEffect } from 'react'
import toggleDarkMode, { isCurrentDarkMode } from '../misc/toggleDarkMode'
import { useRecoilState } from 'recoil'
import { darkModeState } from '@/app/_atoms/dark-mode'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

// 60s x 60m x 24h x 30d
const cookieMaxAge = 60 * 60 * 24 * 30

export default function ThemeSwitcher(props: {
    tooltip: string
    onChange: (darkmode: boolean) => void
}) {
    // use darkmode recoil state
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        if (isCurrentDarkMode()) {
            // set darkmode
            toggleDarkMode(isCurrentDarkMode())

            // set localstorage
            localStorage.setItem('dark-mode', true as unknown as string)
        }

        //
    }, [])

    // change theme event handler process
    const onChange = (darkmode: boolean) => {
        // set darkmode
        toggleDarkMode(darkmode)

        // set localstorage
        localStorage.setItem('dark-mode', darkmode as unknown as string)

        // set cookie
        setCookie(null, 'dark-mode', darkmode ? 'true' : 'false', {
            maxAge: cookieMaxAge,
            path: '/'
        })

        // call onChange
        props.onChange(darkmode)

        //
    }

    // ------------------------------------------------------------------------

    return (
        <>
            {!darkMode.enable && (
                <Button
                    icon="pi pi-moon"
                    rounded
                    text
                    severity="secondary"
                    aria-label="Dark Mode"
                    tooltip={props.tooltip as string}
                    tooltipOptions={{ position: 'bottom' }}
                    onClick={() => {
                        onChange(true)
                    }}
                />
            )}
            {darkMode.enable === true && (
                <Button
                    icon="pi pi-sun"
                    rounded
                    text
                    severity="secondary"
                    aria-label="Light Mode"
                    tooltip={props.tooltip as string}
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
