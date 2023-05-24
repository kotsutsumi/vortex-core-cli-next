// ThemeSwitcher.tsx

import { Button } from 'primereact/button'
// import { PrimeReactThemeContext } from '@/contexts/PrimeReactThemeContext'
import { useContext, useEffect } from 'react'
import toggleDarkMode, { isCurrentDarkMode } from '../misc/toggleDarkMode'

export default function ThemeSwitcher(props: {
    tooltip: string
    onChange: (darkmode: boolean) => void
}) {
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

        // call onChange
        props.onChange(darkmode)

        //
    }

    // ------------------------------------------------------------------------

    return (
        <>
            {!isCurrentDarkMode() && (
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
            {isCurrentDarkMode() === true && (
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
