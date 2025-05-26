import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { headers } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import { Toaster } from '@o2s/ui/components/toaster';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { auth } from '@/auth';

import { redirect, routing } from '@/i18n/routing';

import { GlobalProvider } from '@/providers/GlobalProvider';

import { AuthLayout } from '@/containers/Auth/AuthLayout/AuthLayout';
import { FormValues, ResetPasswordForm } from '@/containers/Auth/ResetPasswordForm';
import { Footer } from '@/containers/Footer/Footer';
import { Header } from '@/containers/Header/Header';

import { AppSpinner } from '@/components/AppSpinner/AppSpinner';

interface Props {
    params: Promise<{
        locale: string;
        slug: string[];
        callbackUrl: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const slug = routing.pathnames['/reset-password']?.[locale] || '/';

    const { seo } = await sdk.modules.getResetPasswordPage({ 'x-locale': locale });

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
        alternates: routing.pathnames['/reset-password'],
    });
}

export default async function ResetPasswordPage({ params }: Readonly<Props>) {
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

        const { data } = await sdk.modules.getResetPasswordPage({ 'x-locale': locale });

        if (!data) {
            notFound();
        }

        const handleResetPassword = async (credentials: FormValues) => {
            'use server';

            await sdk.modules.resetPassword(credentials, { 'x-locale': locale });
            redirect({
                locale,
                href: {
                    pathname: '/login',
                    query: {
                        resetPassword: true,
                    },
                },
            });
        };

        return (
            <GlobalProvider config={init} labels={init.labels} locale={locale}>
                <div className="flex flex-col min-h-dvh">
                    <Header data={init.common.header} />
                    <div className="flex flex-col grow">
                        <AuthLayout>
                            <ResetPasswordForm
                                labels={{
                                    title: data.title,
                                    subtitle: data.subtitle,
                                    username: {
                                        label: data.username.label,
                                        placeholder: data.username.placeholder,
                                        errorMessages: data.username?.errorMessages,
                                    },
                                    resetPassword: data.resetPassword,
                                    invalidCredentials: data.invalidCredentials,
                                }}
                                onResetPassword={handleResetPassword}
                            />

                            {data.image?.url && (
                                <Image
                                    src={data.image?.url}
                                    alt={data.image?.alt}
                                    fill={true}
                                    className="object-cover"
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
