// isDarkMode.ts

import 'server-only'

import { cookies } from 'next/headers'

export default function isDarkMode() {
    //

    // set cookies
    const cookieStore = cookies()

    // set darkmode state from cookie
    const cookieDarkMode = cookieStore.get('dark-mode')

    // return darkmode
    return cookieDarkMode?.value === 'true'

    //
}

// EOF
