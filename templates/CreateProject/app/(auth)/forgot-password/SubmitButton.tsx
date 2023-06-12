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
    const baseClasses = 'mt-6'

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                <Button
                    disabled={disabled}
                    label={t('send-reset-password-url')}
                    icon="pi pi-send"
                    className="w-full button-with-center-icon"
                    onClick={onClick}
                />
            </div>
        </>
    )

    //
}

// EOF
