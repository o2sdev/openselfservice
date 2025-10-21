'use client';

import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { AlertCircle, CircleAlert, Eye, EyeOff } from 'lucide-react';
import { AuthError } from 'next-auth';
import React, { useState } from 'react';
import { object as YupObject, string as YupString } from 'yup';

import { Alert, AlertDescription } from '@o2s/ui/elements/alert';
import { Button } from '@o2s/ui/elements/button';
import { InputWithLabel } from '@o2s/ui/elements/input';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import LogoGithub from '@/assets/icons/logo-github.svg';
import LogoKeycloak from '@/assets/icons/logo-keycloak.svg';

import { FormValues, SignInFormProps } from './SignInForm.types';

const PROVIDERS_LOGOS = {
    github: <LogoGithub />,
    keycloak: <LogoKeycloak />,
};

const MIN_USERNAME_CHARS = 5;
const MAX_USERNAME_CHARS = 64;

const MIN_PASSWORD_CHARS = 4;
const MAX_PASSWORD_CHARS = 64;

export const SignInForm: React.FC<SignInFormProps> = ({ providers, labels, onSignIn }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);

    const validationSchema = YupObject().shape({
        username: YupString()
            .required(labels.username.errorMessages?.find((error) => error.type === 'required')?.description)
            .min(MIN_USERNAME_CHARS, labels.username.errorMessages?.find((error) => error.type === 'min')?.description)
            .max(MAX_USERNAME_CHARS, labels.username.errorMessages?.find((error) => error.type === 'max')?.description)
            .matches(
                /^[a-zA-Z0-9._@-]+$/,
                labels.username.errorMessages?.find((error) => error.type === 'matches')?.description,
            ),

        password: YupString()
            .required(labels.password.errorMessages?.find((error) => error.type === 'required')?.description)
            .min(MIN_PASSWORD_CHARS, labels.password.errorMessages?.find((error) => error.type === 'min')?.description)
            .max(MAX_PASSWORD_CHARS, labels.password.errorMessages?.find((error) => error.type === 'max')?.description)
            .matches(
                /^[a-zA-Z0-9!#$%'*+-/=?^_`{|}~\s]+$/gm,
                labels.password.errorMessages?.find((error) => error.type === 'matches')?.description,
            ),
    });

    return (
        <div className="flex flex-col gap-6 w-full">
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
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4 mt-1" />
                    <AlertDescription>
                        <Typography variant="small" className="mt-1">
                            {labels.invalidCredentials}
                        </Typography>
                    </AlertDescription>
                </Alert>
            )}
            <Formik<FormValues>
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={async (values) => {
                    setError(null);
                    setIsSubmitting(true);
                    const error = await onSignIn('credentials', values);
                    if (error) {
                        setIsSubmitting(false);
                        setError(error);
                    }
                }}
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
                                    <div className="flex flex-col gap-2">
                                        <InputWithLabel
                                            id={field.name}
                                            type="text"
                                            placeholder={labels.username.placeholder}
                                            aria-invalid={!!(touched.username && errors.username)}
                                            name={field.name}
                                            value={field.value}
                                            disabled={isSubmitting}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            label={labels.username.label}
                                        />
                                        <ErrorMessage name="username">
                                            {(msg) => (
                                                <Alert variant="destructive">
                                                    <CircleAlert className="h-4 w-4 mt-1" />
                                                    <AlertDescription>
                                                        <Typography variant="small" className="mt-1">
                                                            {msg}
                                                        </Typography>
                                                    </AlertDescription>
                                                </Alert>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                )}
                            </Field>

                            <Field name="password">
                                {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                                    <div className="flex flex-col gap-2">
                                        <InputWithLabel
                                            id={field.name}
                                            type={passwordVisible ? 'text' : 'password'}
                                            placeholder={labels.password.placeholder}
                                            name={field.name}
                                            value={field.value}
                                            disabled={isSubmitting}
                                            aria-invalid={!!(touched.password && errors.password)}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            label={labels.password.label}
                                            adornment={
                                                <button
                                                    type="button"
                                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                                >
                                                    {passwordVisible ? (
                                                        <Eye width={16} height={16} />
                                                    ) : (
                                                        <EyeOff width={16} height={16} />
                                                    )}
                                                    <span className="sr-only">
                                                        {passwordVisible ? labels.password.hide : labels.password.show}
                                                    </span>
                                                </button>
                                            }
                                            adornmentProps={{ behavior: 'append' }}
                                        />
                                        <ErrorMessage name="password">
                                            {(msg) => (
                                                <Alert variant="destructive">
                                                    <AlertCircle className="h-4 w-4 mt-1" />
                                                    <AlertDescription>
                                                        <Typography variant="small" className="mt-1">
                                                            {msg}
                                                        </Typography>
                                                    </AlertDescription>
                                                </Alert>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                )}
                            </Field>
                        </div>

                        <Button type="submit" disabled={isSubmitting}>
                            {labels.signIn}
                        </Button>
                    </div>
                </Form>
            </Formik>

            {labels.providers && (
                <>
                    {providers.length ? (
                        <div className="flex flex-row gap-2 items-center">
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
                            action={async () => {
                                setIsSubmitting(true);
                                setTimeout(async () => await onSignIn(provider.id), 1);
                            }}
                            className="flex flex-col gap-4"
                        >
                            <Button type="submit" variant="outline" disabled={isSubmitting}>
                                {PROVIDERS_LOGOS[provider.id as keyof typeof PROVIDERS_LOGOS] || null}
                                {labels.providers?.label} {provider.name}
                            </Button>
                        </form>
                    ))}
                </>
            )}
        </div>
    );
};
