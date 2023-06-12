// toggleDarkMode.ts

// toggleDarkMode
export default function toggleDarkMode(force: boolean | undefined = undefined) {
    //

    // set class list
    const clsList = document.body.classList

    if (force !== undefined) {
        //

        // remove dark mode class
        clsList.remove('dark-mode')

        if (force) {
            // add dark mode class
            clsList.add('dark-mode')
        } else {
            // remove dark mode class
            clsList.remove('dark-mode')
        }

        //
    } else {
        //

        // toggle dark mode class
        clsList.toggle('dark-mode')

        //
    }

    //
}

// isCurrentDarkMode
export function isCurrentDarkMode() {
    //

    // ------------------------------------------------------------------------

    return document.body.classList.contains('dark-mode')

    //
}

// getCurrentThemeName
export function getCurrentThemeName() {
    //

    // ------------------------------------------------------------------------

    return isCurrentDarkMode() ? 'dark' : 'light'

    //
}

// getReveseThemeName
export function getReveseThemeName() {
    //

    // ------------------------------------------------------------------------

    return isCurrentDarkMode() ? 'light' : 'dark'

    //
}

// EOF
