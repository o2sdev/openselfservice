'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import React, { useState, useTransition } from 'react';
import { object as YupObject } from 'yup';

import { Button } from '@o2s/ui/components/button';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Typography } from '@o2s/ui/components/typography';

import { Banner } from '@/components/Banner/Banner';

import { PasswordFormField } from '../FormField/PasswordFormField';
import { getConfirmPasswordSchema, getPasswordSchema } from '../Utils/validationSchema';

import { CreateNewPasswordFormProps, FormValues } from './CreateNewPasswordForm.types';

export const CreateNewPasswordForm: React.FC<Readonly<CreateNewPasswordFormProps>> = ({
    labels,
    onCreateNewPassword,
}) => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState(false);

    const validationSchema = YupObject().shape({
        password: getPasswordSchema(labels.password.errorMessages),
        confirmPassword: getConfirmPasswordSchema(labels.confirmPassword.errorMessages),
    });

    const handleSubmit = async (values: FormValues) => {
        setError(false);

        startTransition(async () => {
            try {
                await onCreateNewPassword(values);
            } catch (err) {
                if (!isRedirectError(err)) {
                    setError(true);
                }
            }
        });
    };

    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-6">
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

                {error && <Banner description={labels.creatingPasswordError} variant="destructive" />}

                <Formik<FormValues>
                    initialValues={{
                        password: '',
                        confirmPassword: '',
                    }}
                    onSubmit={handleSubmit}
                    validateOnBlur={true}
                    validateOnMount={false}
                    validateOnChange={false}
                    validationSchema={validationSchema}
                >
                    <LoadingOverlay isActive={isPending}>
                        <Form>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-4">
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
                                                validations={labels.password.regexValidations}
                                                description={labels.password.description}
                                            />
                                        )}
                                    </Field>
                                    <Field name="confirmPassword">
                                        {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                                            <PasswordFormField
                                                field={field}
                                                touched={touched}
                                                errors={errors}
                                                name="confirmPassword"
                                                label={labels.confirmPassword.label}
                                                placeholder={labels.confirmPassword.placeholder}
                                                disabled={isPending}
                                                showLabel={labels.confirmPassword.show}
                                                hideLabel={labels.confirmPassword.hide}
                                            />
                                        )}
                                    </Field>
                                </div>

                                <Button type="submit" disabled={isPending}>
                                    {labels.setNewPassword}
                                </Button>
                            </div>
                        </Form>
                    </LoadingOverlay>
                </Formik>
            </div>
        </div>
    );
};
