// Content.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import Cover from '@/app/_components/Cover'
import Email from '../_conponents/Email'
import ErrorMessage from './ErrorMessage'
import Logo from '../_conponents/Logo'
import Menu from '../_conponents/Menu'
import SubmitButton from './SubmitButton'
import WelcomeMessage from './WelcomeMessage'
import getBaseUrl from '@/app/_libs/getBaseUrl'
import getTranslation from '@/app/_libs/getTranslation'
import { Message } from 'primereact/message'
import { auth } from '@/app/_libs/firebase/client'
import { darkModeAtom } from '@/app/_atoms/dark-mode'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useKeyboardShortcut } from '@/app/_hooks/useKeyboardShortcut'
import { useRecoilValue } from 'recoil'
import { useState } from 'react'

// define Data type
type Data = {
    email: string
}

export default function Content({ initDarkMode }: { initDarkMode: boolean }) {
    //

    // use darkmode recoil state
    const darkMode = useRecoilValue(darkModeAtom)

    // set translation
    const t = getTranslation()

    // data state
    const [data, setData] = useState<Data>({
        email: ''
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
            // set current data
            const updateData: any = data

            // update data
            updateData[key] = v

            // set data
            setData(updateData)

            // update submit button disable state
            if (data.email === '') {
                setDisableSubmitButton(true)
            } else {
                setDisableSubmitButton(false)
            }
        }

        //
    }

    // submit event handler
    const onSubmit = async () => {
        //

        // set cover state
        setCover(true)

        // on catch event handler
        const onCatch = (e: any) => {
            // set error state
            setShowError(true)

            // set cover state
            setCover(false)
        }

        try {
            // -- [for Firebase Auth] ------------------------------------------

            await sendPasswordResetEmail(auth, data.email, {
                url: `${getBaseUrl()}/auth/signin`,
                handleCodeInApp: false
            })
                .then((_res) => {
                    //

                    // set done state
                    setDone(true)

                    // set cover state
                    setCover(false)

                    // redirect to signin page
                    setTimeout(() => {
                        window.location.href = '/signin'
                    }, 3000)

                    //
                })
                .catch(onCatch)

            // ------------------------------------------------------------

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

                    {/* Welcome Message */}
                    <WelcomeMessage />
                </div>

                {/* Forms */}
                {!done && (
                    <div>
                        {/* E-Mail */}
                        <Email update={onUpdateData('email')} />

                        {/* Error Message */}
                        {showError && <ErrorMessage />}

                        <small className="text text-xs">
                            <span className={darkMode ? 'text-white' : 'text'}>
                                {' '}
                                {t('forgot-password-welcome-message')}{' '}
                            </span>
                        </small>
                    </div>
                )}

                {/* Done */}
                {done && (
                    <div className="mb-2">
                        <Message
                            className="w-full"
                            severity="success"
                            text={t('forgot-password-done')}
                            content={
                                <>
                                    <div className="flex-none">
                                        <div className="text text-xl text-center">
                                            {t('forgot-password-done')}
                                        </div>
                                        <div className="mt-4 text text-xs text-center">
                                            {t('forgot-password-done-message')}
                                        </div>
                                    </div>
                                </>
                            }
                        />
                    </div>
                )}

                {/* Submit Button */}
                {!done && (
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
