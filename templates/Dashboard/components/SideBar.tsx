// Sidebar.tsx

'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
    // ------------------------------------------------------------------------
    return (
        <>
            {/* Sidebar */}
            <div
                id="sidebar"
                className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
                style={{ width: '280px' }}
            >
                {/* Sidebar Items */}
                <div className="flex flex-column h-full">
                    {/* Logo */}
                    <div
                        className="flex align-items-center mt-4 px-4 flex-shrink-0"
                        style={{ height: '60px' }}
                    >
                        <Link href="/">
                            <Image
                                src="/images/logo-light.svg"
                                alt="Logo"
                                height={48}
                                width={168}
                            />
                        </Link>
                    </div>

                    {/* Menu */}
                    <div>
                        MENU
                        {/* <Menu /> */}
                    </div>
                </div>
            </div>
        </>
    )

    //
}

// EOF
