// SubmitButton.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import getTranslation from '@/app/_libs/vortexcore/getTranslation'
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
    const baseClasses = 'mt-4'

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClasses + (className ? ` ${className}` : '')}>
                {/* @ts-ignore */}
                <Button
                    disabled={disabled}
                    label={t('reset-password')}
                    icon="pi pi-key"
                    className="w-full button-with-center-icon"
                    onClick={onClick}
                />
            </div>
        </>
    )

    //
}

// EOF
