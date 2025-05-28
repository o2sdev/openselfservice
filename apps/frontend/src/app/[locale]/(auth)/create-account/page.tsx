import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';

import { Toaster } from '@o2s/ui/components/toaster';
import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { auth } from '@/auth';

import { redirect, routing } from '@/i18n/routing';

import { GlobalProvider } from '@/providers/GlobalProvider';

import { AuthLayout } from '@/containers/Auth/AuthLayout/AuthLayout';
import { CreateAccountForm, FormValues } from '@/containers/Auth/CreateAccountForm';
import { FormValuesStep1 } from '@/containers/Auth/CreateAccountForm/CreateAccountForm.types';
import { Footer } from '@/containers/Footer/Footer';
import { Header } from '@/containers/Header/Header';

import { AppSpinner } from '@/components/AppSpinner/AppSpinner';
import { IconsList } from '@/components/IconsList/IconsList';

interface Props {
    params: Promise<{
        locale: string;
        slug: string[];
        callbackUrl: string;
    }>;
    searchParams: Promise<{ resetPassword: string; newPassword: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const slug = routing.pathnames['/create-account']?.[locale] || '/';

    const { seo } = await sdk.modules.getCreateAccountPage({ 'x-locale': locale });

    setRequestLocale(locale);

    return generateSeo({
        slug,
        locale,
        keywords: seo.keywords,
        title: seo.title,
        description: seo.description
            ?.replace(/(<([^>]+)>)/gi, '')
            .replace(/&nbsp;/gi, ' ')
            .replace(/&amp;/gi, '&'),
        image: seo.image || undefined,
        noIndex: seo.noIndex,
        noFollow: seo.noFollow,
        translations: routing.locales,
        alternates: routing.pathnames['/create-account'],
    });
}

export default async function CreateAccountPage({ params }: Readonly<Props>) {
    const headersList = await headers();
    const session = await auth();
    const { locale } = await params;

    try {
        const init = await sdk.modules.getInit(
            {
                referrer: headersList.get('referrer') || (process.env.NEXT_PUBLIC_BASE_URL as string),
            },
            { 'x-locale': locale },
            session?.accessToken,
        );

        const { data } = await sdk.modules.getCreateAccountPage({ 'x-locale': locale });

        if (!data) {
            notFound();
        }

        const handleCheckMembership = async (credentials?: FormValuesStep1) => {
            'use server';

            if (!credentials) {
                throw new Error('No credentials provided');
            }

            const response = await sdk.modules.checkMembership(
                credentials,
                { 'x-locale': locale },
                session?.accessToken,
            );

            return response;
        };

        const hadleRegisterUser = async (credentials?: FormValues) => {
            'use server';

            if (!credentials) {
                throw new Error('No credentials provided');
            }

            const mappedData = {
                ...credentials,
                email: credentials.username,
                companyTaxId: credentials.taxId,
            };

            const response = await sdk.modules.registerUser(mappedData, { 'x-locale': locale }, session?.accessToken);

            if (response) {
                redirect({
                    locale,
                    href: {
                        pathname: '/login',
                        query: {
                            createAccount: true,
                        },
                    },
                });
            }

            return response;
        };

        return (
            <GlobalProvider config={init} labels={init.labels} locale={locale}>
                <div className="flex flex-col min-h-dvh">
                    <Header data={init.common.header} />
                    <div className="flex flex-col grow">
                        <AuthLayout sideVisibleOnMobile={true} sideClassName="px-16 py-20 bg-muted">
                            <CreateAccountForm
                                labels={data.labels}
                                onCheckMembership={handleCheckMembership}
                                onRegisterUser={hadleRegisterUser}
                            />
                            {data.sideContent && data.sideContent.icons && (
                                <IconsList
                                    header={<Typography variant="highlightedBig">{data.sideContent.title}</Typography>}
                                    icons={data.sideContent.icons}
                                />
                            )}
                        </AuthLayout>
                    </div>
                    <Footer data={init.common.footer} />

                    <Toaster />
                    <AppSpinner />
                </div>
            </GlobalProvider>
        );
    } catch (_error) {
        notFound();
    }
}
