// SubmitButton.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import getTranslation from '@/app/_libs/getTranslation'
import { Button } from 'primereact/button'
import { MouseEventHandler } from 'react'

// SubmitButton
export default function SubmitButton({
    className,
    disabled,
    onClick
}: {
    className?: string
    disabled?: boolean
    onClick: MouseEventHandler<HTMLButtonElement>
}) {
    //

    // set translation
    const t = getTranslation()

    // set base classes
    const baseClasses = ''

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                {/* @ts-ignore */}
                <Button
                    disabled={disabled}
                    label={t('signin')}
                    icon="pi pi-user"
                    className="w-full button-with-center-icon"
                    onClick={onClick}
                />
            </div>
        </>
    )

    //
}

// EOF
