import { SessionProvider } from 'next-auth/react';
import { setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import React from 'react';

import { sdk } from '@/api/sdk';

import { auth } from '@/auth';

import { routing } from '@/i18n';

import { GlobalProvider } from '@/providers/GlobalProvider';

import '@/styles/global.scss';

const inter = Inter({
    subsets: ['latin-ext'],
    display: 'swap',
});

interface Props {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
    const session = await auth();

    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const data = await sdk.modules.getInit(
        {
            slug: '',
        },
        { 'x-locale': locale },
        session?.accessToken,
    );

    setRequestLocale(locale);

    return (
        <html lang={locale} className={inter.className}>
            <body>
                <SessionProvider session={session}>
                    <GlobalProvider config={data} locale={locale}>
                        {children}
                    </GlobalProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
