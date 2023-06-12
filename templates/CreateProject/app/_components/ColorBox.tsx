// ColorBox.tsx

'use client'

// ------------------------------------------------------------------------
//  Client Component
// ------------------------------------------------------------------------

import { ReactNode } from 'react'

// BoxColors
export const BoxColors = {
    primary: 0,
    surface: 1,
    white: 2,
    blue: 3,
    green: 4,
    yellow: 5,
    cyan: 6,
    pink: 7,
    indigo: 8,
    teal: 9,
    orange: 10,
    bluegray: 11,
    purple: 12,
    gray: 13,
    red: 14
} as const

// BoxBorder
export const BoxBorder = {
    solid: 0,
    dashed: 1,
    dotted: 2,
    double: 3
} as const

// BoxColorTypes
export type BoxColorTypes = (typeof BoxColors)[keyof typeof BoxColors]

// BoxBorderTypes
export type BoxBorderTypes = (typeof BoxBorder)[keyof typeof BoxBorder]

// ColorBox
export default function ColorBox({
    children,
    className,
    color,
    border,
    bgOpacity = 500,
    borderOpacity = 700
}: {
    children: ReactNode
    className?: string
    color: BoxColorTypes
    border?: BoxBorderTypes | undefined
    bgOpacity?: number
    borderOpacity?: number
}) {
    //

    // set target styles
    const targetStyles = (() => {
        let colorName = 'primary'

        switch (color) {
            case BoxColors.primary:
                colorName = 'primary'
                break
            case BoxColors.surface:
                colorName = 'surface'
                break
            case BoxColors.white:
                colorName = 'white'
                break
            case BoxColors.blue:
                colorName = 'blue'
                break
            case BoxColors.green:
                colorName = 'green'
                break
            case BoxColors.yellow:
                colorName = 'yellow'
                break
            case BoxColors.cyan:
                colorName = 'cyan'
                break
            case BoxColors.pink:
                colorName = 'pink'
                break
            case BoxColors.indigo:
                colorName = 'indigo'
                break
            case BoxColors.teal:
                colorName = 'teal'
                break
            case BoxColors.orange:
                colorName = 'orange'
                break
            case BoxColors.bluegray:
                colorName = 'bluegray'
                break
            case BoxColors.purple:
                colorName = 'purple'
                break
            case BoxColors.gray:
                colorName = 'gray'
                break
            case BoxColors.red:
                colorName = 'red'
                break
        }

        return [
            `bg-${colorName}-${bgOpacity}`,
            `border-${colorName}-${borderOpacity}`
        ]

        //
    })()

    // set border style
    const borderStyle = (() => {
        switch (border) {
            case BoxBorder.solid:
                return 'border-solid'
            case BoxBorder.dashed:
                return 'border-dashed'
            case BoxBorder.dotted:
                return 'border-dotted'
            case BoxBorder.double:
                return 'border-double'
        }

        return ''

        //
    })()

    // set styles
    const styles =
        [
            'flex',
            'align-items-center',
            'justify-content-center',
            'font-bold',
            'border-round',
            borderStyle
        ].join(' ') +
        ' ' +
        targetStyles.join(' ') +
        ' ' +
        className

    // ------------------------------------------------------------------------

    return (
        <>
            {/* <div class="flex  w-4rem h-4rem bg-blue-500 text-white ">1</div> */}
            <div className={styles}>{children}</div>
        </>
    )

    //
}

// PrimaryBox
export function PrimaryBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.primary}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// SurfaceBox
export function SurfaceBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.surface}
                className={className}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// WhiteBox
export function WhiteBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.white}
                className={className}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// BlueBox
export function BlueBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.blue}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// GreenBox
export function GreenBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.green}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// YellowBox
export function YellowBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.yellow}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// CyanBox
export function CyanBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.cyan}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// PinkBox
export function PinkBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.pink}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// IndigoBox
export function IndigoBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.indigo}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// TealBox
export function TealBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.teal}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// OrangeBox
export function OrangeBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.orange}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// BlueGrayBox
export function BlueGrayBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.bluegray}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// PurpleBox
export function PurpleBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.purple}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// GrayBox
export function GrayBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.gray}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// RedBox
export function RedBox({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.red}
                className={className + ' text-white'}
                border={border}
            >
                {children}
            </ColorBox>
        </>
    )

    //
}

// WIP
export function WIP({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.yellow}
                className={className + ' border-1'}
                border={border}
                bgOpacity={100}
                borderOpacity={500}
            >
                <span className="pr-2">🚧</span>
                <span>{children}</span>
            </ColorBox>
        </>
    )

    //
}

// Note
export function Note({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.cyan}
                className={className + ' border-1'}
                border={border}
                bgOpacity={100}
                borderOpacity={500}
            >
                <span className="pr-2">📝</span>
                <span>{children}</span>
            </ColorBox>
        </>
    )

    //
}

// Memo
export function Memo({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <ColorBox
                color={BoxColors.green}
                className={className + ' border-1'}
                border={border}
                bgOpacity={100}
                borderOpacity={500}
            >
                <span className="pr-2">✍</span>
                <span>{children}</span>
            </ColorBox>
        </>
    )

    //
}

// EOF
