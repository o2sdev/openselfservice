'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import React, { useState, useTransition } from 'react';
import { object as YupObject } from 'yup';

import { Button } from '@o2s/ui/components/button';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Typography } from '@o2s/ui/components/typography';

import { Banner } from '@/components/Banner/Banner';

import { FormField } from '../FormField/FormField';
import { getUsernameSchema } from '../Utils/validationSchema';

import { FormValues, ResetPasswordFormProps } from './ResetPasswordForm.types';

export const ResetPasswordForm: React.FC<Readonly<ResetPasswordFormProps>> = ({ labels, onResetPassword }) => {
    const [error, setError] = useState(false);
    const [isPending, startTransition] = useTransition();

    const validationSchema = YupObject().shape({
        username: getUsernameSchema(labels.username.errorMessages),
    });

    const handleSubmit = async (values: FormValues) => {
        setError(false);

        startTransition(async () => {
            try {
                await onResetPassword(values);
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

                {error && <Banner description={labels.invalidCredentials} variant="destructive" />}

                <Formik<FormValues>
                    initialValues={{
                        username: '',
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
                                </div>

                                <Button type="submit" disabled={isPending}>
                                    {labels.resetPassword}
                                </Button>
                            </div>
                        </Form>
                    </LoadingOverlay>
                </Formik>
            </div>
        </div>
    );
};
