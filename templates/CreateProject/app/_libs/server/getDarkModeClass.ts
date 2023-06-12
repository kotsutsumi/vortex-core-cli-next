// getDarkModeClass.ts

import isDarkModeByServer from './isDarkMode'

// getDarkModeClass
export default function getDarkModeClass(): string {
    //

    // ------------------------------------------------------------------------

    // return dark mode class
    return isDarkModeByServer() ? 'dark-mode' : ''

    //
}

// EOF
