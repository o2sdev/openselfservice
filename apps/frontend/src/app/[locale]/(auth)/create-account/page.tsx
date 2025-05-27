import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';
import { providerMap } from 'src/auth.providers';

import { Toaster } from '@o2s/ui/components/toaster';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { auth } from '@/auth';

import { routing } from '@/i18n/routing';

import { GlobalProvider } from '@/providers/GlobalProvider';

import { AuthLayout } from '@/containers/Auth/AuthLayout/AuthLayout';
import { CreateAccountForm } from '@/containers/Auth/CreateAccountForm';
import { Footer } from '@/containers/Footer/Footer';
import { Header } from '@/containers/Header/Header';

import { AppSpinner } from '@/components/AppSpinner/AppSpinner';
import { Image } from '@/components/Image/Image';

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

export default async function CreateAccountPage({ params, searchParams }: Readonly<Props>) {
    const headersList = await headers();
    const session = await auth();
    const { locale, callbackUrl } = await params;
    const { resetPassword, newPassword } = await searchParams;

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

        const handleCheckMembership = async (data: any) => {
            'use server';

            return await sdk.modules.checkMembership(data, { 'x-locale': locale }, session?.accessToken);
        };

        const hadleRegisterUser = async (data: any) => {
            'use server';

            return await sdk.modules.registerUser(data, { 'x-locale': locale }, session?.accessToken);
        };

        return (
            <GlobalProvider config={init} labels={init.labels} locale={locale}>
                <div className="flex flex-col min-h-dvh">
                    <Header data={init.common.header} />
                    <div className="flex flex-col grow">
                        <AuthLayout>
                            <CreateAccountForm
                                providers={providerMap}
                                labels={{
                                    title: data.title,
                                    subtitle: data.subtitle,
                                    password: {
                                        label: data.password.label,
                                        placeholder: data.password.placeholder,
                                        hide: data.labels?.hide,
                                        show: data.labels?.show,
                                        errorMessages: data.password?.errorMessages,
                                    },
                                    username: {
                                        label: data.username.label,
                                        placeholder: data.username.placeholder,
                                        errorMessages: data.username?.errorMessages,
                                    },
                                    signIn: data.signIn,
                                    providers: data.providers,
                                    invalidCredentials: data.invalidCredentials,
                                    forgotPassword: data.forgotPassword,

                                    resetPasswordMessage: resetPassword ? data.resetPasswordMessage : undefined,
                                    newPasswordMessage: newPassword ? data.newPasswordMessage : undefined,
                                }}
                                onCheckMembership={handleCheckMembership}
                                onRegisterUser={hadleRegisterUser}
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
