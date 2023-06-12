// Cover.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { Vortex } from 'react-loader-spinner'
import { darkModeAtom } from '@/app/_atoms/dark-mode'
import { useRecoilValue } from 'recoil'
import { useState } from 'react'

// define props type
type TCoverProps = {}

// Cover
export default function Cover(props: TCoverProps) {
    //

    // use user recoil state
    const darkMode = useRecoilValue(darkModeAtom)

    // base styles
    const baseStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        textAlign: 'center',
        background: darkMode ? '#000' : '#aaa',
        zIndex: '9999',
        opacity: '0.6',
        display: 'block'
    }

    // use colors state
    const baseColors = ['#666', '#777', '#888', '#999', '#666', '#666']

    // use dark colors state
    const baseDarkColors = ['#000', '#111', '#222', '#333', '#333', '#333']

    // set style states
    const [style, setStyle] = useState({
        ...baseStyle,
        background: darkMode ? '#000' : '#aaa'
    })

    // set colors states
    const [colors, _setColors] = useState(
        darkMode ? baseDarkColors : baseColors
    )

    // base classes
    const className = ''

    // ------------------------------------------------------------------------

    return (
        // @ts-ignore
        <div {...{ style, className }}>
            <div className="flex align-items-stretch h-screen flex-wrap">
                <div
                    style={{ width: 80, height: 80, margin: 'auto' }}
                    className="align-self-center"
                >
                    <Vortex
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={colors as any}
                    />
                </div>
            </div>
        </div>
    )

    //
}

// EOF
