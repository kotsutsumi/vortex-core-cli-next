// Content.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import Cover from '@/app/_components/Cover'
import ErrorMessage from './ErrorMessage'
import Logo from '../_conponents/Logo'
import Menu from '../_conponents/Menu'
import Password from '../_conponents/Password'
import SubmitButton from './SubmitButton'
import { auth } from '@/app/_libs/firebase/client'
import { redirect, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useKeyboardShortcut } from '@/app/_hooks/useKeyboardShortcut'
import { verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth'

// define Data type
type Data = {
    password: string
}

// Content
export default function Content({
    initDarkMode,
    actionCode
}: {
    initDarkMode: boolean
    actionCode: string
}) {
    //

    // data state
    const [data, setData] = useState<Data>({
        password: ''
    })

    // show error state
    const [showError, setShowError] = useState(false)

    // cover state
    const [cover, setCover] = useState(false)

    // done state
    const [done, setDone] = useState(false)

    // sbumit button disable state
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)

    // input event handler process
    const onUpdateData = (key: string) => {
        //

        // return each new event handler
        return (v: string | boolean | number) => {
            //

            // set current data
            const updateData: any = data

            // update data
            updateData[key] = v

            // set data
            setData(updateData)

            // update submit button disable state
            if (data.password === '') {
                setDisableSubmitButton(true)
            } else {
                setDisableSubmitButton(false)
            }

            //
        }

        //
    }

    // submit event handler
    const onSubmit = async () => {
        //
        // set cover state
        setCover(true)

        // set done state
        setDone(true)

        // on catch event handler
        const onCatch = (e: any) => {
            //

            // set error state
            setShowError(true)

            // set cover state
            setCover(false)

            // redirect to forgot password page
            setTimeout(() => {
                window.location.href = '/forgot-password'
            }, 2000)

            //
        }

        try {
            //
            // -- [for Firebase Auth] -----------------------------------------

            verifyPasswordResetCode(auth, actionCode)
                .then(() => {
                    //

                    confirmPasswordReset(auth, actionCode, data.password)
                        .then(async (resp) => {
                            // redirect to signin page
                            setTimeout(() => {
                                window.location.href = '/signin'
                            }, 2000)
                        })
                        .catch(onCatch)

                    //
                })
                .catch(onCatch)

            // ----------------------------------------------------------------

            //
        } catch (e) {
            //

            onCatch(e)

            //
        }

        //
    }

    // enter key event handler process
    useKeyboardShortcut(['enter'], onSubmit)

    // ------------------------------------------------------------------------

    return (
        <>
            {/* Cover */}
            {cover && <Cover />}

            {/* Top Right Menu */}
            <Menu initDarkMode={initDarkMode} />

            {/* Form */}
            <div className="surface-card p-4 shadow-2 border-round w-full max-w-28rem">
                <div className="text-center mb-5">
                    {/* Logo */}
                    <Logo initDarkMode={initDarkMode} />
                </div>

                {/* Forms */}
                <div>
                    {/* Password */}
                    <Password update={onUpdateData('password')} />

                    {/* Error Message */}
                    {showError && <ErrorMessage />}
                </div>

                {/* Submit Button */}
                {!done && !showError && (
                    <SubmitButton
                        disabled={disableSubmitButton}
                        onClick={onSubmit}
                    />
                )}
            </div>
        </>
    )

    //
}

// EOF
