import React from 'react';

interface Props {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
        slug: Array<string>;
    }>;
}

export default async function RootLayout({ children }: Props) {
    return <div className="py-6 px-4 md:px-6 ml-auto mr-auto w-full md:max-w-7xl">{children}</div>;
}
