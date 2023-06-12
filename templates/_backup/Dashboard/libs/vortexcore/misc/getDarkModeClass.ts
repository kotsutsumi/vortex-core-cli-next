// getDarkModeClass.ts

import isDarkModeByServer from './isDarkModeByServer'

export default (): string => {
    // return dark mode class
    return isDarkModeByServer() ? 'dark-mode' : ''

    //
}

// EOF
