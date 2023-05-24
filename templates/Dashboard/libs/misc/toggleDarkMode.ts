// toggleDarkMode.ts

export default (force: boolean | undefined) => {
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
    return (
        window.localStorage.getItem('dark-mode') === 'true' ??
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
}

export function getCurrentThemeName() {
    return isCurrentDarkMode() ? 'dark' : 'light'
}

export function getReveseThemeName() {
    return isCurrentDarkMode() ? 'light' : 'dark'
}

// EOF
