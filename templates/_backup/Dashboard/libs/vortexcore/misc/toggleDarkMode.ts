// toggleDarkMode.ts

export default (force: boolean | undefined = undefined) => {
    if (force !== undefined) {
        document.body.classList.remove('dark-mode')

        if (force) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    } else {
        document.body.classList.toggle('dark-mode')
    }

    //
}

export function isCurrentDarkMode() {
    return document.body.classList.contains('dark-mode')
}

export function getCurrentThemeName() {
    return isCurrentDarkMode() ? 'dark' : 'light'
}

export function getReveseThemeName() {
    return isCurrentDarkMode() ? 'light' : 'dark'
}

// EOF
