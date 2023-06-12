// Header.tsx

'use client'

import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import ThemeSwitcher from '@/libs/vortexcore/primereact/ThemeSwitcher'
import Link from 'next/link'
// import ThemeSwitcher from '@/libs/primereact/ThemeSwitcher'
import { Badge } from 'primereact/badge'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { StyleClass } from 'primereact/styleclass'
// import { darkModeState } from '@/app/_atoms/dark-mode'
// import { dictState } from '@/app/_atoms/dict'
// import { isCurrentDarkMode } from '@/libs/misc/toggleDarkMode'
import { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

export default function Header() {
    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        //
    }, [])

    const btnRef10 = useRef(null)

    // ------------------------------------------------------------------------

    return (
        <>
            <div
                className="flex my-4 justify-content-between align-items-center px-5 surface-border relative"
                style={{ height: '60px' }}
            >
                <div className="flex">
                    {/* @ts-ignore */}
                    <StyleClass
                        nodeRef={btnRef10}
                        selector="#sidebar"
                        enterClassName="hidden"
                        enterActiveClassName="fadeinleft"
                        leaveToClassName="hidden"
                        leaveActiveClassName="fadeoutleft"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef10}
                            className="cursor-pointer block lg:hidden text-700 mr-3"
                        >
                            {/* @ts-ignore */}
                            <Button
                                icon="pi pi-bars"
                                size="large"
                                rounded
                                text
                                aria-label="Filter"
                                // tooltip={t('show-menu') as string}
                                // tooltipOptions={{ position: 'bottom' }}
                                severity="secondary"
                            />
                        </a>
                    </StyleClass>

                    {/* Search input form */}
                    <span className="p-input-icon-left">
                        <i className="pi pi-search"></i>
                        <InputText
                            type="search"
                            className="border-none"
                            placeholder="Search"
                        />
                    </span>
                </div>

                <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center md:flex md:align-items-center select-none lg:flex-row border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none md:shadow-none absolute lg:static md:static">
                    {/* Theme Switcher */}
                    <li className="mr-3">
                        <ThemeSwitcher />
                    </li>

                    {/* Notification */}
                    <li className="mr-5">
                        <Link href="#">
                            <i
                                className="pi pi-bell p-overlay-badge text-600 hover:text-900"
                                style={{ fontSize: '1.25rem' }}
                            >
                                {/* @ts-ignore */}
                                <Badge severity="danger" value="2"></Badge>
                            </i>
                        </Link>
                    </li>

                    <li className="mr-3">
                        <LanguageSwitcher />
                    </li>

                    {/* Account */}
                    {/* <li className="border-top-1 surface-border lg:border-top-none">
                        <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors w-full">
                            <img
                                src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                className="mr-3 lg:mr-0"
                                style={{ width: '32px', height: '32px' }}
                                alt="avatar-f-1"
                            />
                            <div className="block lg:hidden">
                                <div className="text-900 font-medium">
                                    Josephine Lillard
                                </div>
                                <span className="text-600 font-medium text-sm">
                                    Marketing Specialist
                                </span>
                            </div>
                            <Ripple />
                        </a>
                    </li> */}
                </ul>
            </div>
        </>
    )

    //
}

// EOF