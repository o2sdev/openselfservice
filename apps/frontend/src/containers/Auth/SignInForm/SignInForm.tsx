'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { AuthError } from 'next-auth';
import NextLink from 'next/link';
import React, { useState, useTransition } from 'react';
import { object as YupObject } from 'yup';

import { Button } from '@o2s/ui/components/button';
import { Link } from '@o2s/ui/components/link';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import { Banner } from '@/components/Banner/Banner';

import LogoGithub from '@/assets/icons/logo-github.svg';

import { FormField } from '../FormField/FormField';
import { PasswordFormField } from '../FormField/PasswordFormField';
import { getPasswordSchema, getUsernameSchema } from '../Utils/validationSchema';

import { FormValues, SignInFormProps } from './SignInForm.types';

export const SignInForm: React.FC<Readonly<SignInFormProps>> = ({ providers, labels, onSignIn, params }) => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<AuthError | null>(null);

    const validationSchema = YupObject().shape({
        username: getUsernameSchema(labels.username.errorMessages),
        password: getPasswordSchema(labels.password.errorMessages),
    });

    const handleSubmit = async (values: FormValues) => {
        setError(null);

        startTransition(async () => {
            const error = await onSignIn('credentials', values);
            if (error) {
                setError(error);
            }
        });
    };

    const handleProviderSignIn = (providerId: string) => {
        startTransition(async () => {
            await onSignIn(providerId);
        });
    };

    return (
        <LoadingOverlay isActive={isPending}>
            <div className="flex flex-col gap-12 w-full">
                <div className="flex flex-col gap-6">
                    {params.resetPassword && (
                        <Banner
                            title={labels.resetPasswordMessage.title}
                            description={labels.resetPasswordMessage.description}
                            variant="positive"
                        />
                    )}
                    {params.newPassword && (
                        <Banner
                            title={labels.newPasswordMessage.title}
                            description={labels.newPasswordMessage.description}
                            variant="positive"
                        />
                    )}
                    {params.createAccount && (
                        <Banner
                            title={labels.createAccountMessage.title}
                            description={labels.createAccountMessage.description}
                            variant="positive"
                        />
                    )}

                    {error && <Banner description={labels.invalidCredentials} variant="destructive" />}
                    <div className="flex flex-col gap-2 items-center text-center">
                        <Typography variant="h1" asChild>
                            <h1>{labels.title}</h1>
                        </Typography>
                        {labels.subtitle && (
                            <Typography variant="body" className="text-muted-foreground">
                                {labels.subtitle}
                            </Typography>
                        )}
                    </div>

                    <Formik<FormValues>
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        onSubmit={handleSubmit}
                        validateOnBlur={true}
                        validateOnMount={false}
                        validateOnChange={false}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-4">
                                    <Field name="username" validateOnChange={true}>
                                        {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                                            <FormField
                                                field={field}
                                                touched={touched}
                                                errors={errors}
                                                name="username"
                                                label={labels.username.label}
                                                placeholder={labels.username.placeholder}
                                                disabled={isPending}
                                                requiredLabel={labels.requiredLabel}
                                                optionalLabel={labels.optionalLabel}
                                                isRequired={true}
                                            />
                                        )}
                                    </Field>

                                    <Field name="password">
                                        {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                                            <PasswordFormField
                                                field={field}
                                                touched={touched}
                                                errors={errors}
                                                name="password"
                                                label={labels.password.label}
                                                placeholder={labels.password.placeholder}
                                                disabled={isPending}
                                                showLabel={labels.password.show}
                                                hideLabel={labels.password.hide}
                                                labelAdornment={
                                                    <Link asChild>
                                                        <NextLink href={labels.forgotPassword.link}>
                                                            {labels.forgotPassword.label}
                                                        </NextLink>
                                                    </Link>
                                                }
                                                requiredLabel={labels.requiredLabel}
                                                optionalLabel={labels.optionalLabel}
                                                isRequired={true}
                                            />
                                        )}
                                    </Field>
                                </div>

                                <Button type="submit" disabled={isPending}>
                                    {labels.signIn}
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                {labels.providers && (
                    <div className="flex flex-col gap-6">
                        {providers.length ? (
                            <div className="flex flex-row gap-2 items-center mt-[-10px] mb-[-9px]">
                                <Separator orientation="horizontal" className="shrink-[1]" />
                                <div className="text-center">
                                    <Typography variant="small" className="text-muted-foreground">
                                        {labels.providers.title}
                                    </Typography>
                                </div>
                                <Separator orientation="horizontal" className="shrink-[1]" />
                            </div>
                        ) : null}
                        {providers.map((provider) => (
                            <form
                                key={provider.id}
                                action={async () => handleProviderSignIn(provider.id)}
                                className="flex flex-col gap-4"
                            >
                                <Button type="submit" variant="outline" disabled={isPending}>
                                    <LogoGithub />
                                    {labels.providers?.label} {provider.name}
                                </Button>
                            </form>
                        ))}
                    </div>
                )}
            </div>
        </LoadingOverlay>
    );
};
