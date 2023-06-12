// Email.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import getTranslation from '@/app/_libs/getTranslation'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'

// Email
export default function Email({
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

    // email state
    const [email, setEmail] = useState('')

    // set base classes
    const baseClasses = ''

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                <label
                    htmlFor="email"
                    className="block text-900 font-medium mb-2"
                >
                    {t('email')}
                </label>
                <InputText
                    id="email"
                    type="text"
                    value={email}
                    onChange={(event) => {
                        //

                        // set email value
                        setEmail(event.target.value)

                        // update parent
                        update(event.target.value)

                        //
                    }}
                    placeholder={placeholder}
                    className="w-full mb-3"
                />
            </div>
        </>
    )

    //
}

// EOF
