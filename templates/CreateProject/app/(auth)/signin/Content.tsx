// Content.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import Cover from '@/app/_components/Cover'
import Email from '../_conponents/Email'
import ErrorMessage from './ErrorMessage'
import ForgotPassword from '../_conponents/ForgotPassword'
import Logo from '../_conponents/Logo'
import Menu from '../_conponents/Menu'
import Password from '../_conponents/Password'
import React, { useState } from 'react'
import RememberMe from '../_conponents/RememberMe'
import SubmitButton from './SubmitButton'
import WelcomeMessage from './WelcomeMessage'
import { auth } from '@/app/_libs/firebase/client'
import { signIn as signInByNextAuth } from 'next-auth/react'
import {
    signInWithEmailAndPassword,
    browserLocalPersistence,
    browserSessionPersistence
} from 'firebase/auth'
import { useKeyboardShortcut } from '@/app/_hooks/useKeyboardShortcut'

// define Data type
type Data = {
    email: string
    password: string
    remember_me: boolean
}

// Content
export default function Content({ initDarkMode }: { initDarkMode: boolean }) {
    //

    // data state
    const [data, setData] = useState<Data>({
        email: '',
        password: '',
        remember_me: false
    })

    // cover state
    const [cover, setCover] = useState(false)

    // show error state
    const [showError, setShowError] = useState(false)

    // sbumit button disable state
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)

    // input event handler process
    const onUpdateData = (key: string) => {
        //

        // return each new event handler
        return (v: string | boolean | number) => {
            // set current data
            const updateData: any = data

            // update data
            updateData[key] = v

            // set data
            setData(updateData)

            // update submit button disable state
            if (data.email === '' || data.password === '') {
                setDisableSubmitButton(true)
            } else {
                setDisableSubmitButton(false)
            }
        }

        //
    }

    // submit event handler
    const onSubmit = async () => {
        // set cover state
        setCover(true)

        try {
            // -- [for Firebase Auth] ------------------------------------------

            // set remember me
            auth.setPersistence(
                data.remember_me
                    ? browserLocalPersistence
                    : browserSessionPersistence
            ).then(async () => {
                try {
                    // get user credential
                    const userCredential = await signInWithEmailAndPassword(
                        auth,
                        data.email,
                        data.password
                    )

                    // get id token
                    const idToken = await userCredential.user.getIdToken()

                    // sign in by NextAuth
                    await signInByNextAuth('credentials', {
                        idToken,
                        callbackUrl: '/'
                    })
                } catch (e) {
                    // set show error state
                    setShowError(true)

                    // set cover state
                    setCover(false)
                }
            })

            // ----------------------------------------------------------------

            //
        } catch (e) {
            //

            // set show error state
            setShowError(true)

            // set cover state
            setCover(false)

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
            <div className="surface-card p-4 shadow-2 border-round w-full max-w-28rem mb-8">
                <div className="text-center mb-5">
                    {/* Logo */}
                    <Logo initDarkMode={initDarkMode} />

                    {/* Welcome Message */}
                    <WelcomeMessage />
                </div>

                {/* Forms */}
                <div>
                    {/* E-Mail */}
                    <Email update={onUpdateData('email')} />

                    {/* Password */}
                    <Password update={onUpdateData('password')} />

                    {/* Remember Me */}
                    <RememberMe update={onUpdateData('remember_me')} />

                    {/* Forgot Password */}
                    <ForgotPassword />

                    {/* Error Message */}
                    {showError && <ErrorMessage />}
                </div>

                {/* Submit Button */}
                <SubmitButton
                    disabled={disableSubmitButton}
                    onClick={onSubmit}
                />
            </div>
        </>
    )

    //
}

// EOF
