'use client'

import { signOut } from 'next-auth/react'
import { useEffect } from 'react'

const SignOut = () => {
    // componentDidMount, componentDidUpdate イベントハンドラ
    useEffect(() => {
        // サインアウト後、サインインページへリダイレクト
        signOut({ callbackUrl: `/signin` })
    })

    return <></>
}

export default SignOut

// EOF
