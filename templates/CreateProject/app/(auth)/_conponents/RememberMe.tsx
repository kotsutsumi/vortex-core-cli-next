// RememberMe.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import getTranslation from '@/app/_libs/getTranslation'
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox'
import { darkModeAtom } from '@/app/_atoms/dark-mode'
import { useRecoilValue } from 'recoil'
import { useState } from 'react'

// RememberMe
export default function RememberMe({
    className,
    update
}: {
    className?: string
    update: Function
}) {
    //

    // use darkmode recoil state
    const darkMode = useRecoilValue(darkModeAtom)

    // set translation
    const t = getTranslation()

    // remember me state
    const [checkedRememberMe, setCheckedRememberMe] = useState(false)

    // set base classes
    const baseClasses = 'flex align-items-center justify-content-between mb-4'

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                <div className="flex align-items-center">
                    <Checkbox
                        inputId="remember_me"
                        className="mr-2"
                        checked={checkedRememberMe}
                        onChange={(e: CheckboxChangeEvent) => {
                            //

                            // set remember me value
                            setCheckedRememberMe(e.checked as boolean)

                            // update parent
                            update(e.checked as boolean)

                            //
                        }}
                    />
                    <label
                        htmlFor="remember_me"
                        className={darkMode ? 'text-white' : 'text'}
                    >
                        {t('remember-me')}
                    </label>
                </div>
            </div>
        </>
    )

    //
}

// EOF
