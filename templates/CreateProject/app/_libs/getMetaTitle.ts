// getMetaTitle.ts

const getMetaTitle = (name?: string): string => {
    //

    return `${name ? name + ' | ' : ''}${
        process.env.NEXT_PUBLIC_APP_NAME
            ? process.env.NEXT_PUBLIC_APP_NAME
            : 'Vortex Core'
    }`

    //
}

export default getMetaTitle

// EOF
