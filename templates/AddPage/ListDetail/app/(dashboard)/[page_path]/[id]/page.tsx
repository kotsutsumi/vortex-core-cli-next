// page.tsx

import Content from './Content'

// Page
export default async function Page({ params }: { params: { id: string } }) {
    // ------------------------------------------------------------------------

    return (
        <>
            <h1>List Detail Sample</h1>
            <div className="mt-5">
                {/* <Content loadingType="overlay" /> */}
                <Content id={params.id as string} loadingType={'skelton'} />
            </div>
        </>
    )

    //
}
// [/@--]

// EOF
