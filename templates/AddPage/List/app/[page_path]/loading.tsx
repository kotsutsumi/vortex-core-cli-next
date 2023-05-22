// loading.tsx

'use client'

import { Skeleton } from 'primereact/skeleton'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default function Loading() {
    // set dummy items
    const items = Array.from({ length: 6 }, (v, i) => i)

    // set body template
    const bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    // ------------------------------------------------------------------------

    return (
        <>
            <DataTable value={items as any} tableStyle={{ minWidth: '50rem' }}>
                <Column
                    field="code"
                    header="Code"
                    style={{ width: '25%' }}
                    body={bodyTemplate}
                ></Column>
                <Column
                    field="name"
                    header="Name"
                    style={{ width: '25%' }}
                    body={bodyTemplate}
                ></Column>
                <Column
                    field="category"
                    header="Category"
                    style={{ width: '25%' }}
                    body={bodyTemplate}
                ></Column>
                <Column
                    field="quantity"
                    header="Quantity"
                    style={{ width: '25%' }}
                    body={bodyTemplate}
                ></Column>
            </DataTable>
        </>
    )

    //
}

// EOF
