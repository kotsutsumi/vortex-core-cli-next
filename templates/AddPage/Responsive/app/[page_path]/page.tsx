// page.tsx

// [@-- section="Import"]
import Content from './content'
import DashboardProvider from '@/app/_providers/DashboardProvider'
import ServerAuthContent from '@/app/_components/next-auth/ServerAuthContent'
// [/@--]

// [@-- section="Code"]
export default async function Page() {
    // ------------------------------------------------------------------------

    return (
        // [@-- section="TSX" type="default"]

        <>
            {/* @ts-expect-error Server Component */}
            <ServerAuthContent>
                {/* DashboardProvider */}
                <DashboardProvider>
                    <div className="mt-5">
                        <Content />
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