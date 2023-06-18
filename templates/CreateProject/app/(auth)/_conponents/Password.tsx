// Password.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import getTranslation from '@/app/_libs/vortexcore/getTranslation'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'

// Password
export default function Password({
    className,
    update,
    placeholder
}: {
    className?: string
    update: Function
    placeholder?: string
}) {
    //

    // set translation
    const t = getTranslation()

    // password state
    const [password, setPassword] = useState('')

    // set base classes
    const baseClasses = ''

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                <label
                    htmlFor="password"
                    className="block text-900 font-medium mb-2"
                >
                    {t('password')}
                </label>
                <InputText
                    type="password"
                    placeholder={placeholder}
                    value={password}
                    onChange={(event) => {
                        // set password value
                        setPassword(event.target.value)

                        // update parent
                        update(event.target.value)
                    }}
                    className="w-full mb-4"
                />
            </div>
        </>
    )

    //
}

// EOF
