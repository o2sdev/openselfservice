import React from 'react';

interface Props {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
        slug: Array<string>;
    }>;
}

export default async function RootLayout({ children }: Props) {
    return <div className="flex w-full grow">{children}</div>;
}
