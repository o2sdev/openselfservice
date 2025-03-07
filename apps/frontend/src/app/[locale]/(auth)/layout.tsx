import React from 'react';

import { sdk } from '@/api/sdk';

import { Header } from '@/components/Header/Header';

interface Props {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
        slug: Array<string>;
    }>;
}

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;

    const { header } = await sdk.modules.getLoginPage({ 'x-locale': locale });

    return (
        <div className="flex flex-col min-h-dvh">
            <Header headerData={header} />

            <div className="flex grow w-full">{children}</div>
        </div>
    );
}
