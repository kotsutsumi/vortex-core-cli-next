// isDarkMode.ts

export default function isDarkMode() {
    //

    if (typeof document === 'undefined') {
        return false
    }

    // ------------------------------------------------------------------------

    return document.body.classList.contains('dark-mode')

    //
}

// EOF
