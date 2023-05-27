// page.tsx

// [@-- section="Import"]
import Content from './content'
import DashboardProvider from '@/app/_providers/DashboardProvider'
import ServerAuthContent from '@/app/_components/next-auth/ServerAuthContent'
// [/@--]

// [@-- section="Code"]
export default async function Page({ params }: { params: { id: string } }) {
    // ------------------------------------------------------------------------

    return (
        // [@-- section="TSX" type="default"]

        <>
            {/* @ts-expect-error Server Component */}
            <ServerAuthContent>
                {/* AppProvider */}
                <DashboardProvider>
                    <h1>CRUD Sample</h1>
                    <div className="mt-5">
                        <Content id={params.id as string} />
                    </div>
                </DashboardProvider>
            </ServerAuthContent>
        </>

        // [/@--]
    )

    //
}
// [/@--]

// EOF
