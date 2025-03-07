import { notFound } from 'next/navigation';
import React from 'react';

import { sdk } from '@/api/sdk';

import { auth, signIn } from '@/auth';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

interface Props {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
        slug: Array<string>;
    }>;
}

export default async function RootLayout({ children, params }: Props) {
    const session = await auth();

    if (!session?.user) return signIn();

    const { locale, slug } = await params;

    const { data, common } = await sdk.modules.getPage(
        {
            slug: slug ? `/${slug.join('/')}` : '/',
        },
        { 'x-locale': locale },
        session.accessToken,
    );

    if (!data) {
        return notFound();
    }

    return (
        <div className="flex flex-col min-h-dvh">
            <Header headerData={common.header} alternativeUrls={data?.alternativeUrls} user={session.user} />

            <div className="px-4 md:px-6 ml-auto mr-auto w-full md:max-w-7xl grow">{children}</div>

            <Footer data={common.footer} />
        </div>
    );
}
