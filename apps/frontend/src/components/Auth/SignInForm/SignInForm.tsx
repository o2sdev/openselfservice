'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { CircleAlert, Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { object as YupObject, string as YupString } from 'yup';

import { Button } from '@o2s/ui/components/button';
import { Input } from '@o2s/ui/components/input';
import { Label } from '@o2s/ui/components/label';
import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import LogoGithub from '@/assets/icons/logo-github.svg';

import { FormValues, SignInFormProps } from './SignInForm.types';

const MIN_USERNAME_CHARS = 5;
const MAX_USERNAME_CHARS = 64;

const MIN_PASSWORD_CHARS = 4;
const MAX_PASSWORD_CHARS = 64;

export const SignInForm: React.FC<SignInFormProps> = ({ providers, labels, onSignIn }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const validationSchema = YupObject().shape({
        username: YupString()
            .min(MIN_USERNAME_CHARS, labels.username.errorMessages?.find((error) => error.type === 'min')?.description)
            .max(MAX_USERNAME_CHARS, labels.username.errorMessages?.find((error) => error.type === 'max')?.description)
            .required(labels.username.errorMessages?.find((error) => error.type === 'required')?.description)
            .matches(
                /^[a-zA-Z0-9._@-]+$/,
                labels.username.errorMessages?.find((error) => error.type === 'matches')?.description,
            ),

        password: YupString()
            .min(MIN_PASSWORD_CHARS, labels.password.errorMessages?.find((error) => error.type === 'min')?.description)
            .max(MAX_PASSWORD_CHARS, labels.password.errorMessages?.find((error) => error.type === 'max')?.description)
            .required(labels.password.errorMessages?.find((error) => error.type === 'required')?.description)
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

            <Formik<FormValues>
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={async (values) => {
                    setIsSubmitting(true);
                    setTimeout(async () => await onSignIn('credentials', values), 1);
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
                                        <Label htmlFor={field.name}>{labels.username.label}</Label>
                                        <Input
                                            id={field.name}
                                            type="text"
                                            placeholder={labels.username.placeholder}
                                            aria-invalid={!!(touched.username && errors.username)}
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                        />

                                        {touched.username && errors.username ? (
                                            <div className="flex flex-row gap-2 items-center">
                                                <CircleAlert className="w-4 h-4 shrink-0 text-destructive" />
                                                <Typography variant="small" className="text-destructive">
                                                    {errors.username}
                                                </Typography>
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </Field>
                            <Field name="password">
                                {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor={field.name}>{labels.password.label}</Label>
                                        <Input
                                            id={field.name}
                                            type={passwordVisible ? 'text' : 'password'}
                                            placeholder={labels.password.placeholder}
                                            name={field.name}
                                            value={field.value}
                                            aria-invalid={!!(touched.password && errors.password)}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
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
                                        {touched.password && errors.password ? (
                                            <div className="flex flex-row gap-2 items-center">
                                                <CircleAlert className="w-4 h-4 shrink-0 text-destructive" />
                                                <Typography variant="small" className="text-destructive">
                                                    {errors.password}
                                                </Typography>
                                            </div>
                                        ) : null}
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
                            <Button type="submit" variant="secondary" disabled={isSubmitting}>
                                <LogoGithub />
                                {labels.providers?.label} {provider.name}
                            </Button>
                        </form>
                    ))}
                </>
            )}
        </div>
    );
};
