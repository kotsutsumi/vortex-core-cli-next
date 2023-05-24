// Cover.tsx

import { Vortex } from 'react-loader-spinner'
import { darkModeState } from '@/app/_atoms/dark-mode'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

// define props type
type TCoverProps = {}

export default function Cover(props: TCoverProps) {
    // use user recoil state
    const darkMode = useRecoilValue(darkModeState)

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
    const baseDarkColors = ['#000', '#111', '#222', '#333', '#333', '#333']

    const [style, setStyle] = useState({
        ...baseStyle,
        background: darkMode ? '#000' : '#aaa'
    })
    const [colors, setColors] = useState(darkMode ? baseDarkColors : baseColors)

    // base classes
    const className = ''

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        //
    }, [])

    // ------------------------------------------------------------------------

    return (
        // @ts-ignore
        <div {...{ style, className }}>
            <div className="flex align-items-stretch h-screen flex-wrap card-container green-container">
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
