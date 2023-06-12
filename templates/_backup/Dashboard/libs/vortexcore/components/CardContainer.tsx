// CardContainer.tsx

import { ReactNode } from 'react'
import { BoxBorder, BoxBorderTypes, BoxColorTypes, BoxColors } from './ColorBox'

export default function CardContainer({
    children,
    className,
    color,
    border
}: {
    children: ReactNode
    className?: string
    color?: BoxColorTypes
    border?: BoxBorderTypes | undefined
}) {
    // set target styles
    const targetStyles = (() => {
        let colorName = 'gray'

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

        return [`bg-${colorName}-50`, `border-${colorName}-500`]

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

        return 'border-dashed'

        //
    })()

    // set styles
    const styles = (
        [
            // 'flex',
            // 'flex-column',
            // 'md:flex-row',
            // 'flex-wrap',
            'border-round-md',
            'border-1',
            'p-4',
            'my-4',
            borderStyle
        ].join(' ') +
        ' ' +
        targetStyles.join(' ') +
        ' ' +
        (className ? className : '')
    ).trim()

    // ------------------------------------------------------------------------

    return (
        <>
            <div
                className={styles}
                style={{
                    backgroundImage: 'url("/images/tiny-checkers.png")'
                }}
            >
                {children}
            </div>
        </>
    )

    //
}

export function PrimaryContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.primary}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function SurfaceContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.surface}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function WhiteContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.white}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function BlueContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.blue}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function GreenContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.green}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function YellowContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.yellow}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function CyanContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.cyan}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function PinkContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.pink}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function IndigoContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.indigo}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function TealContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.teal}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function OrangeContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.orange}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function BlueGrayContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.bluegray}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function PurpleContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.purple}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function GrayContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.gray}
            >
                {children}
            </CardContainer>
        </>
    )
}

export function RedContainer({
    children,
    className,
    border
}: {
    children: ReactNode
    className?: string
    border?: BoxBorderTypes | undefined
}) {
    // ------------------------------------------------------------------------

    return (
        <>
            <CardContainer
                className={className}
                border={border}
                color={BoxColors.red}
            >
                {children}
            </CardContainer>
        </>
    )
}

// EOF
