import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { routing } from '@/i18n/routing';

import { AuthLayout } from '@/containers/Auth/AuthLayout/AuthLayout';
import { CreateNewPasswordForm, FormValues } from '@/containers/Auth/CreateNewPassword';

interface Props {
    params: Promise<{
        locale: string;
        slug: string[];
        callbackUrl: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const slug = routing.pathnames['/login']?.[locale] || '/';

    const { seo } = await sdk.modules.getCreateNewPasswordPage({ 'x-locale': locale });

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
        alternates: routing.pathnames['/login'],
    });
}

export default async function CreateNewPasswordPage({ params }: Readonly<Props>) {
    const { locale } = await params;

    try {
        const { data } = await sdk.modules.getCreateNewPasswordPage({ 'x-locale': locale });

        if (!data) {
            notFound();
        }

        const handleSetNewPassword = async (credentials: FormValues) => {
            'use server';

            console.log('set new password', credentials);
            return Promise.resolve();
        };

        return (
            <AuthLayout>
                <div className="flex flex-col gap-20">
                    <CreateNewPasswordForm
                        labels={{
                            title: data.title,
                            subtitle: data.subtitle,
                            setNewPassword: data.setNewPassword,
                            password: {
                                label: data.password.label,
                                placeholder: data.password.placeholder,
                                hide: data.labels?.hide,
                                show: data.labels?.show,
                                errorMessages: data.password?.errorMessages,
                                regexValidations: data.password?.regexValidations,
                            },
                            confirmPassword: {
                                label: data.confirmPassword.label,
                                placeholder: data.confirmPassword.placeholder,
                                hide: data.labels?.hide,
                                show: data.labels?.show,
                                errorMessages: data.confirmPassword?.errorMessages,
                            },
                            creatingPasswordError: data.creatingPasswordError,
                        }}
                        onCreateNewPassword={handleSetNewPassword}
                    />
                </div>
                {data.image?.url && (
                    <Image src={data.image?.url} alt={data.image?.alt} fill={true} className="object-cover" />
                )}
            </AuthLayout>
        );
    } catch (_error) {
        notFound();
    }
}
