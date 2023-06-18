// FormContainer.tsx

import { ReactNode } from 'react'

// FormContainer
export default function FormContainer({ children }: { children: ReactNode }) {
    //

    // ------------------------------------------------------------------------

    return (
        <>
            <div className="surface-card p-4 shadow-2 border-round w-full mb-6 max-w-28rem">
                {children}
            </div>
        </>
    )

    //
}

// EOF
