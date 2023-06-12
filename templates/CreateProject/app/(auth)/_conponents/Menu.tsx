// Menu.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import DarkModeSwitcher from '@/app/_components/DarkModeSwitcher'
import TopRightMenuItem from './MenuItem'

// Menu
export default function Menu({ initDarkMode }: { initDarkMode: boolean }) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <div className="absolute md:top-0 md:right-0 bottom-0 md:p-4 p-0 font-bold">
                <div className="flex flex-row w-12rem">
                    {/* DarkModeSwitcher */}
                    <TopRightMenuItem className="mb-4 pt-4">
                        <DarkModeSwitcher initDarkMode={initDarkMode} />
                    </TopRightMenuItem>

                    {/* Language Switcher */}
                    <TopRightMenuItem className="mr-4 w-8">
                        <LanguageSwitcher />
                    </TopRightMenuItem>
                </div>
            </div>
        </>
    )

    //
}

// EOF
