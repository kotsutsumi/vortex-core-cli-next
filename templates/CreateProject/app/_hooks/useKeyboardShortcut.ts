// useKeyboardShortcut.ts

import { useEffect } from 'react'

type Key = 'ctrl' | 'shift' | 'alt' | string

export const useKeyboardShortcut = (
    keys: Key[],
    callback: () => boolean | undefined
) => {
    //

    // useEffect is a React hook that runs a function when the component is
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                keys.every(
                    (key) =>
                        (key === 'ctrl' && event.ctrlKey) ||
                        (key === 'shift' && event.shiftKey) ||
                        (key === 'alt' && event.altKey) ||
                        (typeof key === 'string' &&
                            event.key?.toLowerCase() === key)
                )
            ) {
                if (callback() === false) {
                    event.preventDefault()
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        // --------------------------------------------------------------------

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }

        //
    }, [keys, callback])

    //
}

// EOF
