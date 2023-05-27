// isDarkMode.ts

'use client'

export default () => {
    if (typeof document === 'undefined') {
        return false
    }

    return document.body.classList.contains('dark-mode')

    //
}

// EOF
