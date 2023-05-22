// SideMenu.tsx

import { Ripple } from 'primereact/ripple'
import { StyleClass } from 'primereact/styleclass'
import { useRef } from 'react'
import PrimeReact from 'primereact/api'
import { NodeService } from '@/app/services/SideMenu/NodeService'
import Link from 'next/link'

const buildMenu = (items: any[], depth: number = 0) => {
    let ret

    for (const item of items) {
        if (item.children) {
            // node
            const indent = 'pl-' + (depth + 3)
            const classes = `p-ripple p-3 ${indent} flex align-items-center justify-content-between text-600 cursor-pointer`
            const ref = useRef(null)

            ret = (
                <>
                    {ret}
                    <StyleClass
                        nodeRef={ref}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                    >
                        <div ref={ref} className={classes}>
                            <span className="font-medium">
                                {item.icon && (
                                    <i className={item.icon + ' mr-2'}></i>
                                )}
                                {item.label}
                            </span>
                            <i className="pi pi-chevron-down"></i>
                            <Ripple />
                        </div>
                    </StyleClass>
                    <div className="list-none p-0 m-0 overflow-hidden">
                        {buildMenu(item.children, depth + 1)}
                    </div>
                </>
            )

            //
        } else {
            // leaf
            const indent = 'ml-' + ((depth - 1) * 2 + 3)
            const classes = `p-ripple flex align-items-center cursor-pointer p-3 ${indent} border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`

            ret = (
                <>
                    {ret}
                    <div>
                        <Link
                            className={classes}
                            href={item.href ? item.href : ''}
                        >
                            {item.icon && (
                                <i className={item.icon + ' mr-2'}></i>
                            )}
                            <span className="font-medium">{item.label}</span>
                            <Ripple />
                        </Link>
                    </div>
                </>
            )

            //
        }

        //
    }

    return ret

    //
}

export default function SideMenu() {
    // set ripple effect globally
    PrimeReact.ripple = true

    // set node data
    const items = NodeService.getTreeNodesData()

    // init refs
    const refs = {}

    // build menu
    const menu = buildMenu(items)
    const ref1 = useRef(null)

    // ------------------------------------------------------------------------
    return (
        <>
            <div className="list-none p-3 m-0">
                <div>{menu}</div>
            </div>
        </>
    )

    //
}

// EOF
