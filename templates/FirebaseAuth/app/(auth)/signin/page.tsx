// page.tsx

'use client'

import Cover from '@/app/_components/Cover'
import Image from 'next/image'
import styles from './page.module.css'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { InputText } from 'primereact/inputtext'
import { Message } from 'primereact/message'
import { auth } from '@/libs/firebase/client'
import { signIn as signInByNextAuth } from 'next-auth/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { KeyboardEvent, useEffect, useState } from 'react'

export default function SignInPage() {
    // darkmode state
    const [isDarkMode, setIsDarkMode] = useState(false)

    // cover state
    const [cover, setCover] = useState(false)

    // email state
    const [email, setEmail] = useState('')

    // password state
    const [password, setPassword] = useState('')

    // remember me state
    const [checkedRememberMe, setCheckedRememberMe] = useState(false)

    // show error state
    const [showError, setShowError] = useState(false)

    const onKeyDownForInput = (event: KeyboardEvent) => {
        if (event.defaultPrevented) {
            return // Do nothing if the event was already processed
        }
        switch (event.key) {
            case 'Enter':
                // Do something for "enter" or "return" key press.
                signIn()
                break
            default:
                // Quit when this doesn't handle the key event.
                return
        }

        // Cancel the default action to avoid it being handled twice
        event.preventDefault()

        //
    }

    const signIn = async () => {
        if (!email) return
        if (!password) return

        // set cover state
        setCover(true)

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            const idToken = await userCredential.user.getIdToken()

            await signInByNextAuth('credentials', {
                idToken,
                callbackUrl: '/'
            })
        } catch (e) {
            // set show error state
            setShowError(true)

            // set cover state
            setCover(false)

            //
        }

        //
    }

    // ------------------------------------------------------------------------
    return (
        <>
            {/* cover */}
            {cover && <Cover />}

            {/* top-right menus */}
            {/*
            <div
                className="absolute top-0 right-0 p-4 font-bold "
                style={{ minWidth: 300, minHeight: 70 }}
            >
                <div className="flex flex-row flex-wrap card-container blue-container">
                    <div className="flex align-items-center justify-content-center w-2rem h-2rem mr-4 pt-4"></div>
                    <div className="flex align-items-center justify-content-center w-8 mr-4"></div>
                </div>
            </div>
            */}

            {/* SignIn Form */}
            <div className="surface-card p-4 shadow-2 border-round w-full max-w-28rem">
                <div className="text-center mb-5">
                    {/* Logo */}
                    <div>
                        <Image
                            priority
                            className="inline mb-3 mt-3"
                            src="/images/logo-light.svg"
                            alt="Logo"
                            width={224}
                            height={64}
                        />
                    </div>

                    {/* Welcome Message */}
                    {/*
                    <div className="text-900 text-3xl font-medium mb-3">
                        Welcome Back
                    </div>
                    */}
                </div>

                {/* Error Message */}
                {showError && (
                    <div className="flex align-items-center justify-content-between mb-4">
                        <Message
                            className="w-full"
                            severity="error"
                            text="メールアドレス、またはパスワード違います。"
                        />
                    </div>
                )}

                {/* Forms */}
                <div>
                    {/* E-Mail */}
                    <label
                        htmlFor="email"
                        className="block text-900 font-medium mb-2"
                    >
                        メールアドレス
                    </label>
                    <InputText
                        id="email"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        // placeholder={'メールアドレスを入力してください。'}
                        className="w-full mb-3"
                        onKeyDown={onKeyDownForInput}
                    />

                    {/* Password */}
                    <label
                        htmlFor="password"
                        className="block text-900 font-medium mb-2"
                    >
                        パスワード
                    </label>
                    <InputText
                        type="password"
                        // placeholder="パスワードを入力してください。"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full mb-8"
                        onKeyDown={onKeyDownForInput}
                    />

                    {/* Remember Me */}
                    {/*
                    <div className="flex align-items-center justify-content-between mb-6">
                        <div className="flex align-items-center">
                            <Checkbox
                                inputId="rememberme"
                                className="mr-2"
                                checked={checkedRememberMe}
                                onChange={(e) =>
                                    setCheckedRememberMe(e.checked as any)
                                }
                            />
                            <label htmlFor="rememberme">
                                ログイン状態を保存する
                            </label>
                        </div>
                    </div>
                    */}

                    {/* SignIn Button */}
                    <Button
                        label="サインイン"
                        icon="pi pi-user"
                        className="w-full"
                        onClick={signIn}
                    />

                    {/* Forgot Password */}
                    {/*
                    <div className="flex align-items-center justify-content-between mt-6">
                        <a className="font-medium no-underline text-blue-500 text-right cursor-pointer">
                            パスワードを忘れた方はこちら
                        </a>
                    </div>
                    */}
                </div>
            </div>
        </>
    )

    //
}

// EOF
