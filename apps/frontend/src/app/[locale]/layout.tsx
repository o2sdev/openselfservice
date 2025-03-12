import { SessionProvider } from 'next-auth/react';
import { setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';

import { sdk } from '@/api/sdk';

import { auth } from '@/auth';

import { routing } from '@/i18n';

import { GlobalProvider } from '@/providers/GlobalProvider';

import { Footer } from '@/containers/Footer/Footer';
import { Header } from '@/containers/Header/Header';

import '@/styles/global.scss';

const inter = Inter({
    subsets: ['latin-ext'],
    display: 'swap',
});

interface Props {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
    }>;
}

export default async function RootLayout({ children, params }: Props) {
    const headersList = await headers();
    const session = await auth();

    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        return notFound();
    }

    const init = await sdk.modules.getInit(
        {
            referrer: headersList.get('referrer') || (process.env.NEXT_PUBLIC_BASE_URL as string),
        },
        { 'x-locale': locale },
        session?.accessToken,
    );

    setRequestLocale(locale);

    return (
        <html lang={locale} className={inter.className}>
            <body>
                {/*@see https://github.com/nextauthjs/next-auth/issues/9504#issuecomment-2516665386*/}
                <SessionProvider key={session?.user?.id} session={session} refetchOnWindowFocus={false}>
                    <GlobalProvider config={init} locale={locale}>
                        <div className="flex flex-col min-h-dvh">
                            <Header headerData={init.common.header} />

                            <div className="flex flex-col grow">{children}</div>

                            <Footer data={init.common.footer} />
                        </div>
                    </GlobalProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
