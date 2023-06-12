// content.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { useSession } from 'next-auth/react'

// Content
export default function Content() {
    //

    // get session, status and update
    const { data: session, status, update } = useSession()
    console.log('ClientComponent Session: ', session)

    // ------------------------------------------------------------------------

    return (
        <>
            Content [CSR]
            <br />
            <button
                onClick={() => {
                    // update関数を使ってセッションデータを更新する
                    // 指定したオブジェクトは、session.data 下に上書きされる
                    update({ lastClick: new Date().toString() })

                    //
                }}
            >
                SET Session Data
            </button>
        </>
    )

    //
}

// EOF
