// content.tsx

'use client'

// [@-- section="Import"]
import Cover from '@/app/_components/Cover'
import Image from 'next/image'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import ThemeSwitcher from '@/libs/vortexcore/primereact/ThemeSwitcher'
import isDarkMode from '@/libs/vortexcore/misc/isDarkMode'
import t from '@/libs/vortexcore/misc/transtate'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { InputText } from 'primereact/inputtext'
import { KeyboardEvent, useEffect, useState } from 'react'
import { Message } from 'primereact/message'
import { auth } from '@/libs/firebase/client'
import { signIn as signInByNextAuth } from 'next-auth/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
// [/@--]

// [@-- section="Code"]
export default function Content() {
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

    // logo src state
    const [logoSrc, setLogoSrc] = useState(
        `/images/logo-${isDarkMode() ? 'dark' : 'light'}.svg`
    )

    // update darkmode settings
    const updateDarkModeSettings = () => {
        // update logo src
        setLogoSrc(`/images/logo-${isDarkMode() ? 'dark' : 'light'}.svg`)

        //
    }

    // input event handler process
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

    // sign in event handler
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

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        // update darkmode settings
        updateDarkModeSettings()

        //
    }, [])

    // ------------------------------------------------------------------------

    return (
        // [@-- section="TSX" type="default"]

        <>
            {/* cover */}
            {cover && <Cover />}

            {/* top-right menus */}
            <div
                className="absolute top-0 right-0 p-4 font-bold "
                style={{ minWidth: 300, minHeight: 70 }}
            >
                <div className="flex flex-row flex-wrap card-container blue-container">
                    {/* ThemeSwitcher */}
                    <div className="flex align-items-center justify-content-center mr-4 mb-4 pt-4">
                        <ThemeSwitcher onChange={updateDarkModeSettings} />
                    </div>

                    {/* Language Switcher */}
                    <div className="flex align-items-center justify-content-center w-8 mr-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>

            {/* SignIn Form */}
            <div className="surface-card p-4 shadow-2 border-round w-full max-w-28rem">
                <div className="text-center mb-5">
                    {/* Logo */}
                    <div>
                        <Image
                            priority
                            className="inline mb-3 mt-3"
                            src={logoSrc}
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
                        {/* @ts-ignore */}
                        <Message
                            className="w-full"
                            severity="error"
                            text={t('signin-error')}
                        />
                    </div>
                )}

                {/* Forms */}
                <div>
                    {/* E-Mail */}
                    <div>
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
                            onChange={(event) => setEmail(event.target.value)}
                            // placeholder={'メールアドレスを入力してください。'}
                            className="w-full mb-3"
                            onKeyDown={onKeyDownForInput}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-900 font-medium mb-2"
                        >
                            {t('password')}
                        </label>
                        <InputText
                            type="password"
                            // placeholder="パスワードを入力してください。"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            className="w-full mb-8"
                            onKeyDown={onKeyDownForInput}
                        />
                    </div>

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
            */}
                </div>

                {/* SignIn Button */}
                <div>
                    {/* @ts-ignore */}
                    <Button
                        label={t('signin')}
                        icon="pi pi-user"
                        className="w-full"
                        onClick={signIn}
                    />
                </div>

                {/* Forgot Password */}
                {/*
            <div className="flex align-items-center justify-content-between mt-6">
                <a className="font-medium no-underline text-blue-500 text-right cursor-pointer">
                    パスワードを忘れた方はこちら
                </a>
            </div>
            */}
            </div>
        </>

        // [/@--]
    )

    //
}
// [/@--]

// EOF
