// page.tsx

import Content from './Content'

// Page
export default async function Page({ params }: { params: { id: string } }) {
    // ------------------------------------------------------------------------

    return (
        <>
            <h1>CRUD Sample</h1>
            <div className="mt-5">
                <Content id={params.id as string} />
            </div>
        </>
    )

    //
}

// EOF
