'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { AuthError } from 'next-auth';
import React, { useState } from 'react';
import { object as YupObject } from 'yup';

import { Button } from '@o2s/ui/components/button';
import { Typography } from '@o2s/ui/components/typography';

import { Banner } from '@/components/Banner/Banner';

import { FormField } from '../FormField/FormField';
import { getUsernameSchema } from '../Utils/validationSchema';

import { FormValues, ResetPasswordFormProps } from './ResetPassword.types';

export const ResetPasswordForm: React.FC<Readonly<ResetPasswordFormProps>> = ({ labels, onResetPassword }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);

    const validationSchema = YupObject().shape({
        username: getUsernameSchema(labels.username.errorMessages),
    });

    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-6">
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
                    }}
                    onSubmit={async (values) => {
                        setError(null);
                        setIsSubmitting(true);
                        const error = await onResetPassword(values);
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
                                        <FormField
                                            field={field}
                                            touched={touched}
                                            errors={errors}
                                            name="username"
                                            label={labels.username.label}
                                            placeholder={labels.username.placeholder}
                                            disabled={isSubmitting}
                                        />
                                    )}
                                </Field>
                            </div>

                            <Button type="submit" disabled={isSubmitting}>
                                {labels.resetPassword}
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
