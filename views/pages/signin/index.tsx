import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { signIn as signInByNextAuth } from 'next-auth/react'
import { auth } from '@/libs/firebase/client'
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import NextImage from 'next/image'

const SingIn = () => {
    const logoUrl = '/next.svg'
    const logoAlt = 'Logo'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked1, setChecked1] = useState(false)

    const signIn = async () => {
        if (!email) return
        if (!password) return

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
            console.error(e)
        }
    }

    return (
        <div className="surface-ground h-screen px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <div>
                        <NextImage
                            className="mb-3 mt-3"
                            src={logoUrl}
                            alt={logoAlt || ''}
                            width={150}
                            height={80}
                        />
                    </div>
                    <div className="text-900 text-3xl font-medium mb-3">
                        {/* Welcome Back */}
                    </div>
                    {/* <span className="text-600 font-medium line-height-3">
                    Don&apos;t have an account?
                </span>
                <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
                    Create today!
                </a> */}
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-900 font-medium mb-2"
                    >
                        Email
                    </label>
                    <InputText
                        id="email"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email address"
                        className="w-full mb-3"
                    />

                    <label
                        htmlFor="password"
                        className="block text-900 font-medium mb-2"
                    >
                        Password
                    </label>
                    <InputText
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full mb-3"
                    />

                    <div className="flex align-items-center justify-content-between mb-6">
                        {/* <div className="flex align-items-center">
                            <Checkbox
                                id="rememberme"
                                className="mr-2"
                                checked={checked1}
                                onChange={(e) => setChecked1(e.checked as any)}
                            />
                            <label htmlFor="rememberme">Remember me</label>
                        </div>
                        <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
                            Forgot your password?
                        </a> */}
                    </div>

                    <Button
                        label="Sign In"
                        icon="pi pi-user"
                        className="w-full"
                        onClick={() => {
                            signIn()
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SingIn

// EOF
